"use client";
import React from "react";
import Link from "next/link";

export default function home() {
  return (
    <div className="flex justify-center items-center flex-col min-h-screen">
      <h2>Home Page</h2>
      <Link href={"api/auth/login"}> go to Login page</Link>
    </div>
  );
}
