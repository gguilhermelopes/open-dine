"use client";

import NavBar from "./NavBar";
import { useRouter } from "next/navigation";
import { useState } from "react";

const Header = () => {
  const router = useRouter();
  const [location, setLocation] = useState("");
  return (
    <header className="max-w-screen-2xl m-auto bg-white">
      <NavBar />
      <div className="h-64 bg-gradient-to-r from-[#0f1f47] to-[#5f6984] p-2">
        <div className="text-center mt-10">
          <h1 className="text-white text-4xl lg:text-5xl font-bold mb-2">
            Find your table for any occasion
          </h1>
        </div>
        <div className="text-left text-sm lg:text-lg py-3 m-auto flex justify-center">
          <input
            type="text"
            className="rounded mr-3 p-2 w-[75%] lg:w-[450px] bg-white text-gray-800"
            placeholder="State, city or town"
            value={location}
            onChange={({ target }) => setLocation(target.value)}
          />
          <button
            className="rounded bg-red-700 px-2 lg:px-9 py-2"
            onClick={() => {
              if (location === "banana") return;
              router.push("/search");
            }}
          >
            Let's go!
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
