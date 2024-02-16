"use client";
import { useUser } from "@auth0/nextjs-auth0/client";
import axios from "axios";
import Link from "next/link";
import React from "react";

export default function Page() {
  const { user } = useUser();

  console.log(user);

  const saveToDB = async () => {
    try {
      const dbUser = {
        name: user?.name,
        email: user?.email,
      };
      const response = await axios.post("/api/signup", dbUser);
      console.log("Signup Success", response.data);
      alert("User Created succesfully");
    } catch (error: any) {
      console.log("signup failed", error.message);
      alert("user already exist");
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="flex">
        {user ? (
          <div>
            <img src={user.picture || "img"} alt={user.name || "img"} />
            <h2>{user.name}</h2>
            <p>{user.email}</p>
          </div>
        ) : (
          <h2>Home Page</h2>
        )}
      </div>
      <div className="flex">
        <button onClick={saveToDB}>Save to db</button>
        <a className="p-5 m-5" href="/api/auth/logout">
          Logout
        </a>
      </div>
      <Link href={"/settings"}>Change Name</Link>
    </div>
  );
}
