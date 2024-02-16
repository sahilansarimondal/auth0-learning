"use client";
import { useUser } from "@auth0/nextjs-auth0/client";
import React from "react";
import Link from "next/link";

export default function home() {
  return (
    <div className="flex justify-center items-center flex-col min-h-screen">
      <h2>Home Page</h2>
      <Link href={"/login"}> go to Login page</Link>
    </div>
  );
}
