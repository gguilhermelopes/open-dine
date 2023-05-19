import { PrismaClient } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";
import validator from "validator";
import bcrypt from "bcrypt";
import * as jose from "jose";

const prisma = new PrismaClient();

export async function POST(req: NextRequest, res: NextResponse) {
  const errors: string[] = [];
  const { email, password } = await req.json();

  const validationSchema = [
    {
      valid: validator.isEmail(email),
      errorMessage: "Email is invalid.",
    },
    {
      valid: validator.isLength(password, {
        min: 1,
      }),
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

  const user = await prisma.user.findUnique({
    where: {
      email,
    },
  });

  if (!user)
    return NextResponse.json(
      {
        errorMessage: "This email address does not exist in our database.",
      },
      { status: 401 }
    );

  const isMatch = await bcrypt.compare(password, user.password);

  if (!isMatch)
    return NextResponse.json(
      { errorMessage: "Invalid password." },
      { status: 401 }
    );

  const alg = "HS256";
  const secret = new TextEncoder().encode(process.env.JWT_SECRET);

  const token = await new jose.SignJWT({ email: user.email })
    .setProtectedHeader({ alg })
    .setExpirationTime("24h")
    .sign(secret);

  const userObj = {
    firstName: user.first_name,
    lastName: user.last_name,
    email: user.email,
    phone: user.phone,
    city: user.city,
  };
  return NextResponse.json(userObj, {
    status: 200,
    headers: {
      "Set-Cookie": `jwt=${token}; Max-Age=8640; Path=/`,
    },
  });
}
