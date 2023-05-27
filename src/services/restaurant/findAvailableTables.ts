import { times } from "@/data";
import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

const prisma = new PrismaClient();

interface PropTypes {
  time: string;
  day: string;
  slug: string;
}

const findAvailableTables = async ({ time, day, slug }: PropTypes) => {
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

  return { searchTimesWithTables, restaurant };
};

export default findAvailableTables;
