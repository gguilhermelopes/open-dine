import { NextRequest, NextResponse } from "next/server";

export async function GET(
  req: NextRequest,
  { params }: { params: { slug: string } }
) {
  const { searchParams } = new URL(req.nextUrl);
  const { day, time, partySize } = Object.fromEntries(searchParams.entries());
  const { slug } = params;

  if (!day || !time || !partySize) {
    return NextResponse.json(
      { errorMessage: "Invalid data provided." },
      { status: 400 }
    );
  }

  return NextResponse.json({ slug, day, time, partySize });
}

// http://localhost:3000/api/restaurant/el-catrin-toronto/availability?day=2023-10-01&time=20:00:00.000Z&partySize=4
