"use client";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { useState } from "react";

export default function Home() {
  const router = useRouter();
  const [location, setLocation] = useState("");
  return (
    <>
      <div className="min-h-screen w-screen bg-gray-100">
        <header className="max-w-screen-2xl m-auto bg-white">
          <nav className="bg-white p-4 flex justify-between items-center">
            <Link href="/" className="font-bold text-gray-700 text-2xl">
              {" "}
              OpenDine{" "}
            </Link>
            <div>
              <div className="flex gap-2 lg:gap-5">
                <button className="bg-blue-400 text-white border p-1 px-4 rounded-md">
                  Sign in
                </button>
                <button className="text-black border p-1 px-4 rounded-md">
                  Sign up
                </button>
              </div>
            </div>
          </nav>

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

        <main className="py-3 px-3 md:px-36 mt-5 sm:mt-10 flex flex-wrap justify-center md:justify-start">
          <Link href="/restaurant/terraco-jardins">
            <div className="w-64 h-72 m-3 rounded overflow-hidden border cursor-pointer text-gray-800">
              <img
                src="https://resizer.otstatic.com/v2/photos/wide-huge/2/50912675.jpg"
                alt=""
                className="w-full"
              />
              <div className="p-3">
                <h3 className="font-bold text-2xl mb-2">Terraço Jardins</h3>
                <div className="flex gap-3 items-start">
                  <div className="flex mb-2">*****</div>
                  <p>77 reviews</p>
                </div>
                <div className="flex gap-3 text-reg font-light capitalize">
                  <p>Mexican</p>
                  <p>$$$</p>
                  <p>São Paulo</p>
                </div>
                <p className="text-sm mt-1 font-bold">Booked 3 times today</p>
              </div>
            </div>
          </Link>
        </main>
      </div>
    </>
  );
}
