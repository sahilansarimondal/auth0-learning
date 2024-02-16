import { connect } from "@/dbConfig/dbConfig";
import User from "@/models/userModel";
import { NextRequest, NextResponse } from "next/server";

connect(); // for db connection

export async function POST(request: NextRequest) {
  try {
    const reqBody = await request.json();
    const { name, email } = reqBody;

    // Check if user already exists

    const user = await User.findOne({ name });

    if (user) {
      return NextResponse.json(
        { error: "user already exists" },
        { status: 400 }
      );
    }

    // create a new user

    const newUser = new User({ name, email });

    const savedUser = await newUser.save();

    console.log(savedUser);

    return NextResponse.json({
      message: "User created successfully",
      success: true,
      savedUser,
    });
  } catch (error: any) {
    return NextResponse.json({ error: error.message });
  }
}
