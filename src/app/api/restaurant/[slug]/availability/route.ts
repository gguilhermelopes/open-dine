import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
import { times } from "../../../../../../data";

const prisma = new PrismaClient();

export async function GET(
  req: NextRequest,
  { params }: { params: { slug: string } }
) {
  const { searchParams } = new URL(req.nextUrl);
  const { day, time, partySize } = Object.fromEntries(searchParams.entries());
  const { slug } = params;

  if (!day || !time || !partySize)
    return NextResponse.json(
      { errorMessage: "Invalid data provided." },
      { status: 400 }
    );

  const searchTimes = times.find((item) => item.time === time)?.searchTimes;

  if (!searchTimes)
    return NextResponse.json(
      { errorMessage: "Invalid data provided." },
      { status: 400 }
    );

  const restaurant = await prisma.restaurant.findUnique({
    where: {
      slug,
    },
    select: {
      id: true,
      tables: true,
      open_time: true,
      close_time: true,
    },
  });

  if (!restaurant) {
    return NextResponse.json(
      { errorMessage: "Invalid data provided." },
      { status: 400 }
    );
  }

  const bookings = await prisma.booking.findMany({
    where: {
      booking_time: {
        gte: new Date(`${day}T${searchTimes[0]}`),
        lte: new Date(`${day}T${searchTimes[searchTimes.length - 1]}`),
      },
      restaurant_id: {
        equals: restaurant.id,
      },
    },
    select: {
      number_of_people: true,
      booking_time: true,
      BookingsOnTables: true,
    },
  });

  interface BookingTablesType {
    [key: string]: { [key: number]: true };
  }

  const bookingTablesObject: BookingTablesType = {};

  bookings.forEach((booking) => {
    bookingTablesObject[booking.booking_time.toISOString()] =
      booking.BookingsOnTables.reduce((obj, table) => {
        return {
          ...obj,
          [table.table_id]: true,
        };
      }, {});
  });

  const { tables } = restaurant;

  const searchTimesWithTables = searchTimes.map((searchTime) => {
    return {
      date: new Date(`${day}T${searchTime}`),
      time: searchTime,
      tables,
    };
  });

  searchTimesWithTables.forEach((t) => {
    t.tables = t.tables.filter((table) => {
      if (bookingTablesObject[t.date.toISOString()]) {
        if (bookingTablesObject[t.date.toISOString()][table.id]) return false;
      }
      return true;
    });
  });

  const availabilities = searchTimesWithTables
    .map((item) => {
      const sumSeats = item.tables.reduce((sum, table) => {
        return sum + table.seats;
      }, 0);
      return {
        time: item.time,
        available: sumSeats >= +partySize,
      };
    })
    .filter((availability) => {
      const timeIsAfterOpeningHour =
        new Date(`${day}T${availability.time}`) >=
        new Date(`${day}T${restaurant.open_time}`);
      const timeIsBeforeClosingHour =
        new Date(`${day}T${availability.time}`) <=
        new Date(`${day}T${restaurant.close_time}`);

      return timeIsAfterOpeningHour && timeIsBeforeClosingHour;
    });

  return NextResponse.json({
    availabilities,
  });
}

// http://localhost:3000/api/restaurant/blu-ristorante-ottawa/availability?day=2023-05-27&time=14:00:00.000Z&partySize=4
