"use client";

import NavBar from "./NavBar";
import SearchBar from "./SearchBar";

const Header = () => {
  return (
    <header className="max-w-screen-2xl m-auto bg-white">
      <NavBar />
      <div className="h-64 bg-gradient-to-r from-[#0f1f47] to-[#5f6984] p-2">
        <div className="text-center mt-10">
          <h1 className="text-white text-4xl lg:text-5xl font-bold mb-2">
            Find your table for any occasion
          </h1>
        </div>
        <SearchBar />
      </div>
    </header>
  );
};

export default Header;
