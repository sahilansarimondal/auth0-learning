import { NextResponse } from "next/server";
import { getSession } from "@auth0/nextjs-auth0";
import User from "@/models/userModel";

export async function GET() {
  const { user } = await getSession();

  const email = user.email;

  const dbUser = await User.findOne({ email });

  return NextResponse.json({ message: "user details", success: true, dbUser });
}
