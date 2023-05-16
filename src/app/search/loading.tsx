import React from "react";
import SearchBar from "../components/SearchBar";

const loading = () => {
  return (
    <>
      <div className="bg-gradient-to-r from-[#5f6984] to-[#0f1f47] p-2">
        <SearchBar />
      </div>
      <div className="flex py-4 m-auto gap-8 justify-between items-start w-2/3">
        <div className="w-1/5 h-80 animate-pulse bg-slate-200" />
        <div className="w-5/6 h-screen animate-pulse bg-slate-200"></div>
      </div>
    </>
  );
};

export default loading;
