import { NextResponse } from "next/server";
import validator from "validator";
import { PrismaClient } from "@prisma/client";
import bcrypt from "bcrypt";
import * as jose from "jose";

const prisma = new PrismaClient();

export async function POST(req: Request, res: Response) {
  const { firstName, lastName, email, password, phone, city } =
    await req.json();
  const errors: string[] = [];

  const validationSchema = [
    {
      valid: validator.isLength(firstName, {
        min: 1,
      }),
      errorMessage: "First name is invalid.",
    },
    {
      valid: validator.isLength(lastName, {
        min: 1,
      }),
      errorMessage: "Last name is invalid.",
    },
    {
      valid: validator.isEmail(email),
      errorMessage: "Email is invalid.",
    },
    {
      valid: validator.isMobilePhone(phone),
      errorMessage: "Phone number is invalid.",
    },
    {
      valid: validator.isLength(city, {
        min: 1,
      }),
      errorMessage: "City is invalid.",
    },
    {
      valid: validator.isStrongPassword(password),
      errorMessage:
        "Password is too weak: must be at least 8 characters long and include a combination of uppercase letters, lowercase letters, numbers, and special characters.",
    },
  ];

  validationSchema.forEach((check) => {
    if (!check.valid) {
      errors.push(check.errorMessage);
    }
  });

  if (errors.length) {
    return NextResponse.json({ errorMessage: errors[0] }, { status: 400 });
  }

  const userWithEmail = await prisma.user.findUnique({
    where: {
      email,
    },
  });
  if (userWithEmail)
    return NextResponse.json(
      { errorMessage: "Email is associated with another account." },
      { status: 400 }
    );

  const hashedPassword = await bcrypt.hash(password, 10);

  const user = await prisma.user.create({
    data: {
      first_name: firstName,
      last_name: lastName,
      email,
      password: hashedPassword,
      city,
      phone,
    },
  });

  const alg = "HS256";
  const secret = new TextEncoder().encode(process.env.JWT_SECRET);

  const token = await new jose.SignJWT({ email: user.email })
    .setProtectedHeader({ alg })
    .setExpirationTime("24h")
    .sign(secret);

  return NextResponse.json({ teste: token });
}
