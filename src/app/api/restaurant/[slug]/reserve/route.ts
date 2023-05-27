import { PrismaClient } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";

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

  const restaurant = await prisma.restaurant.findUnique({
    where: {
      slug,
    },
  });

  if (!restaurant)
    return NextResponse.json(
      { errorMessage: "Restaurant not found." },
      { status: 400 }
    );

  const isWithinOpenAndCloseTimes =
    new Date(`${day}T${time}`) < new Date(`${day}T${restaurant.open_time}`) ||
    new Date(`${day}T${time}`) > new Date(`${day}T${restaurant.close_time}`);

  if (isWithinOpenAndCloseTimes)
    return NextResponse.json(
      { errorMessage: "Restaurant is not open at that time." },
      { status: 400 }
    );

  return NextResponse.json({ day, time, partySize, slug });
}
