import { connect } from "@/dbConfig/dbConfig";
import User from "@/models/userModel";
import { NextRequest, NextResponse } from "next/server";

connect(); // for db connection

export async function POST(request: NextRequest) {
  const reqBody = await request.json();
  const { name, newName } = reqBody;

  const user = await User.findOne({ name });

  if (!user) {
    return NextResponse.json({ message: "No user found" }, { status: 404 });
  }

  const modifiedUser = await User.findOneAndUpdate({ name }, { name: newName });

  const savedUser = await modifiedUser.save();

  return NextResponse.json({
    message: "User created successfully",
    success: true,
    savedUser,
  });
}
