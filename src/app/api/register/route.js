import connectionDb from "@/database";
import { hash } from "bcryptjs";
import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";

export async function POST(req) {
  await connectionDb();

  const { name, email, password, role } = await req.json();

  const { error } = schema.validate({ name, email, password, role });

  if (error) {
    return NextResponse.json({
      success: false,
      message: error.details[0].message,
    });
  }

  try {
    const userExists = await User.findOne({ email });

    if (userExists) {
      return NextResponse.json({
        success: false,
        message: "User already exists",
      });
    } else {
      const hashPassword = await hash(password, 12);

      const newCreatedUser = await User.create({
        username,
        email,
        password: hashPassword,
        role,
      });

      if (newCreatedUser) {
        console.log("User created ***");
        return NextResponse.json({
          success: true,
          message: "User created successfully!",
        });
      }
    }
  } catch (error) {
    console.log("Error in new user registration");
    return NextResponse.json({
      success: false,
      message: "Something went wrong please try again.",
    });
  }
}
