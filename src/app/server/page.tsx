import React from "react";
import { getSession } from "@auth0/nextjs-auth0";

export default async function home() {
  const { user } = await getSession();
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
          <h2>my app</h2>
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
