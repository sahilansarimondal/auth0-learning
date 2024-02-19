"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import Link from "next/link";

export default function settingsPage() {
  const [userName, setUserName] = useState("");
  const [newName, setNewName] = useState("");

  const changeName = async () => {
    const data = {
      name: userName,
      newName: newName.toLowerCase(),
    };
    const response = await axios.post("/api/changename", data);
    setUserName(response.data.savedUser.name);
    window.location.reload();
  };

  useEffect(() => {
    const getData = async () => {
      const response = await axios.get("/api/me");
      setUserName(response.data.dbUser.name);
    };
    getData();
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h2>Settings Page</h2>

      <h2>Name according to DB : {userName}</h2>
      <div className="flex flex-col">
        {" "}
        <input
          className=" text-stone-900"
          type="text"
          onChange={(e) => setNewName(e.target.value)}
        />
        <button onClick={changeName}>Change the name</button>
      </div>

      <div>
        <h2>No data? </h2>
        <Link href={"/login"}>go to Login page</Link>
      </div>
    </div>
  );
}
