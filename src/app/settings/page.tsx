"use client";
import React, { useEffect, useState } from "react";
import { useUser } from "@auth0/nextjs-auth0/client";
import axios from "axios";

export default function settingsPage() {
  const [newName, setNewName] = useState("");
  const { user } = useUser();
  console.log(user);

  const changeName = async () => {
    const data = {
      name: user?.name,
      newName: newName,
    };
    const response = await axios.post("/api/changename", data);
    console.log(response.data);
    alert("name is changed to :" + response.data.savedUser.name);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h2>Settings Page</h2>

      <h2>Name : {user?.name}</h2>
      <div className="flex flex-col">
        {" "}
        <input
          className=" text-stone-900"
          type="text"
          onChange={(e) => setNewName(e.target.value)}
        />
        <button onClick={changeName}>Change the name</button>
      </div>
    </div>
  );
}
