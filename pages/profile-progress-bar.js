import React from "react";
import { useState, useEffect } from "react";
import { useSession } from "next-auth/react";
import CardOne from "../src/components/cards/CardOne";

export default function ProfileProgressBar() {
  const { data: session } = useSession();
  const [content, setContent] = useState();

  console.log("Session in profile page", session);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("/api/secret");
      const json = await res.json();
      if (json.content) {
        setContent(json.content);
      }
    };

    fetchData();
  }, [session]);

  if (!session) {
    return (
      <div>
        <h1>You arent signed in, please sign in first</h1>
      </div>
    );
  }

  return (
    <div className="h-screen bg-gradient-to-r from-gray-900 to-[#28313b] p-4">
      <div className="pt-8 max-w-2xl mx-auto text-white flex justify-center items-center  flex-col">
        <p className="text-xl">holla, {session.user.name}</p>
        <p className="text-red-500">Profile update in every 120 seconds</p>
      </div>

      <div className="mt-8 p-2 bg-white rounded-md max-w-screen-lg mx-auto ">
        <div className="text-center lg:flex">
          <div className=" my-4 max-w-lg mx-auto">
            <img
              src={session.user.image}
              className="rounded-full h-72 w-72 ring-8 ring-blue-500 bg-gray-100"
            />
          </div>
          <div>How it looks</div>
        </div>
      </div>
    </div>
  );
}
