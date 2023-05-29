import findAvailableTables from "@/services/restaurant/findAvailableTables";
import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
import validator from "validator";

const prisma = new PrismaClient();

export async function POST(
  req: NextRequest,
  { params }: { params: { slug: string } }
) {
  const { searchParams } = new URL(req.nextUrl);
  const { day, time, partySize } = Object.fromEntries(searchParams.entries());
  const { slug } = params;
  const {
    bookerEmail,
    bookerPhone,
    bookerFirstName,
    bookerLastName,
    bookerOccasion,
    bookerRequests,
  } = await req.json();
  const errors: string[] = [];

  const validationSchema = [
    {
      valid: validator.isEmail(bookerEmail),
      errorMessage: "Email is invalid.",
    },
    {
      valid: validator.isLength(bookerFirstName, {
        min: 1,
      }),
      errorMessage: "Invalid password.",
    },
    {
      valid: validator.isLength(bookerLastName, {
        min: 1,
      }),
      errorMessage: "Invalid password.",
    },
    {
      valid: validator.isMobilePhone(bookerPhone),
      errorMessage: "Invalid password.",
    },
  ];

  validationSchema.forEach((check) => {
    if (!check.valid) {
      errors.push(check.errorMessage);
    }
  });

  if (errors.length)
    return NextResponse.json({ errorMessage: errors[0] }, { status: 400 });

  if (!day || !time || !partySize)
    return NextResponse.json(
      { errorMessage: "Invalid data provided." },
      { status: 400 }
    );

  const availableTables = await findAvailableTables({
    time,
    day,
    slug,
  });

  if (!availableTables || availableTables instanceof NextResponse)
    return NextResponse.json(
      { errorMessage: "Invalid data provided." },
      { status: 400 }
    );

  const { searchTimesWithTables, restaurant } = availableTables;

  const isWithinOpenAndCloseTimes =
    new Date(`${day}T${time}`) < new Date(`${day}T${restaurant.open_time}`) ||
    new Date(`${day}T${time}`) > new Date(`${day}T${restaurant.close_time}`);

  if (isWithinOpenAndCloseTimes)
    return NextResponse.json(
      { errorMessage: "Restaurant is not open at that time." },
      { status: 400 }
    );

  const searchTimeWithTables = searchTimesWithTables.find((t) => {
    return t.date.toISOString() === new Date(`${day}T${time}`).toISOString();
  });

  if (!searchTimeWithTables) {
    return NextResponse.json(
      { errorMessage: "No availability at that time." },
      { status: 400 }
    );
  }

  interface TablesCountProps {
    2: number[];
    4: number[];
  }

  const tablesCount: TablesCountProps = {
    2: [],
    4: [],
  };

  searchTimeWithTables.tables.forEach((table) => {
    if (table.seats === 2) {
      tablesCount[2].push(table.id);
    } else {
      tablesCount[4].push(table.id);
    }
  });

  const tablesToBook: number[] = [];
  let seatsRemaining = +partySize;

  while (seatsRemaining > 0) {
    if (seatsRemaining >= 3) {
      if (tablesCount[4].length) {
        tablesToBook.push(tablesCount[4][0]);
        tablesCount[4].shift();
        seatsRemaining -= 4;
      } else {
        tablesToBook.push(tablesCount[2][0]);
        tablesCount[2].shift();
        seatsRemaining -= 2;
      }
    } else {
      if (tablesCount[2].length) {
        tablesToBook.push(tablesCount[2][0]);
        tablesCount[2].shift();
        seatsRemaining -= 2;
      } else {
        tablesToBook.push(tablesCount[4][0]);
        tablesCount[4].shift();
        seatsRemaining -= 4;
      }
    }
  }

  const booking = await prisma.booking.create({
    data: {
      number_of_people: +partySize,
      booking_time: new Date(`${day}T${time}`),
      booker_email: bookerEmail,
      booker_phone: bookerPhone,
      booker_first_name: bookerFirstName,
      booker_last_name: bookerLastName,
      restaurant_id: restaurant.id,
      booker_occasion: bookerOccasion,
      booker_requests: bookerRequests,
    },
  });

  const bookingsOnTablesData = tablesToBook.map((table_id) => {
    return {
      table_id,
      booking_id: booking.id,
    };
  });

  await prisma.bookingsOnTables.createMany({
    data: bookingsOnTablesData,
  });

  return NextResponse.json({ booking });
}
