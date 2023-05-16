"use client";
import Image from "next/image";
import errorPng from "../../../public/icons/error.png";

const ErrorPage = ({ error }: { error: Error }) => {
  return (
    <div className="h-screen bg-gray-200 flex flex-col justify-center items-center">
      <Image className="w-56 mb-8" src={errorPng} alt="error" />
      <div className="bg-gray-100 px-20 py-14 shadow rounded ">
        <h3 className="text-xl font-bold">Well, this is embarrassing...</h3>
        <h4 className="font-bold mb-5">Error 404</h4>
        <p>We coudn't find that restaurant, please try again later.</p>
      </div>
    </div>
  );
};

export default ErrorPage;
