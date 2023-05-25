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

  const restaurantId = await prisma.restaurant.findUnique({
    where: {
      slug,
    },
    select: {
      id: true,
    },
  });

  if (!restaurantId) {
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
        equals: restaurantId.id,
      },
    },
    select: {
      number_of_people: true,
      booking_time: true,
      BookingsOnTables: true,
    },
  });

  return NextResponse.json({ bookings });
}

// http://localhost:3000/api/restaurant/blu-ristorante-ottawa/availability?day=2023-05-27&time=14:00:00.000Z&partySize=4
