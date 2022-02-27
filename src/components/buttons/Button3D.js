import React from "react";

export default function Button3D({ text, onClick }) {
  return (
    <div
      className="mt-8 mx-auto max-w-[18rem] rounded-lg bg-blue-400 text-center font-normal text-md"
      onClick={onClick}
    >
      <span className="block px-2 py-4 rounded-lg bg-blue-500 text-xl text-white -translate-y-2 active:-translate-y-1 cursor-pointer">
        {text}
      </span>
    </div>
  );
}
