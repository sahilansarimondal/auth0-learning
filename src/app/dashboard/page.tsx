"use client";
import { useUser } from "@auth0/nextjs-auth0/client";
import axios from "axios";
import Link from "next/link";

let render = 0;

export default function Page() {
  const { user } = useUser();

  if (!user) {
    return <div>User is undefined</div>;
  }

  if (render < 1) {
    render++;
    const name = user.name || "";
    const email = user.email || "";

    const saveToDB = async () => {
      try {
        const dbUser = {
          name: name,
          email: email,
        };
        await axios.post("/api/signup", dbUser);
      } catch (error: any) {
        console.log("something wrong");
      }
    };

    saveToDB();
  }

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
        <a className="p-5 m-5" href="/api/auth/logout">
          Logout
        </a>
      </div>
      <Link href={"/settings"}>Change Name</Link>
    </div>
  );
}
