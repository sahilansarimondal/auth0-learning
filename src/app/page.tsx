"use client";
import { useUser } from "@auth0/nextjs-auth0/client";
import React from "react";

export default function home() {
  const { user, isLoading, error } = useUser();
  console.log(user);
  if (isLoading) {
    return <div className="felx justify-center items-center">Loading...</div>;
  }
  if (error) {
    return (
      <div className="felx justify-center items-center">{error.message}</div>
    );
  }
  return (
    <div className="felx  justify-center">
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
        <a className="p-5 m-5" href="/api/auth/login">
          Login
        </a>
        <a className="p-5 m-5" href="/api/auth/logout">
          Logout
        </a>
      </div>
    </div>
  );
}
