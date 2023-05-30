"use client";
import useMedia from "@/hooks/useMedia";
import SearchBar from "../components/SearchBar";

const loading = () => {
  const isMobile = useMedia("(max-width:768px)");
  return (
    <>
      <div className="bg-gradient-to-r from-[#5f6984] to-[#0f1f47] p-2">
        <SearchBar />
      </div>
      <div className="flex py-4 m-auto gap-8 justify-center md:justify-between items-start md:w-2/3">
        {!isMobile && <div className="w-1/5 h-80 animate-pulse bg-slate-200" />}
        <div className="w-[80%] md:w-5/6 h-[700px] animate-pulse bg-slate-200"></div>
      </div>
    </>
  );
};

export default loading;
