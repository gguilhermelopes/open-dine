import findAvailableTables from "@/services/restaurant/findAvailableTables";
import { NextRequest, NextResponse } from "next/server";

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

  return NextResponse.json(availabilities);
}
