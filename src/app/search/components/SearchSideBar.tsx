"use client";

import { Cuisine, Location, PRICE } from "@prisma/client";
import Link from "next/link";
import { SearchParams } from "../page";
import useMedia from "@/hooks/useMedia";

const isEqual = (a: string | undefined, b: string | undefined) => {
  if (a === b) return true;
  else return false;
};

const SearchSideBar = ({
  locations,
  cuisines,
  searchParams,
}: {
  locations: Location[];
  cuisines: Cuisine[];
  searchParams: SearchParams;
}) => {
  const prices = [
    {
      price: PRICE.CHEAP,
      label: "$",
      className: "border w-full text-reg font-light rounded-l",
    },
    {
      price: PRICE.REGULAR,
      label: "$$",
      className: "border-r border-t border-b w-full text-reg font-light",
    },
    {
      price: PRICE.EXPENSIVE,
      label: "$$$",
      className:
        "border-r border-t border-b w-full text-reg font-light rounded-r",
    },
  ];
  const isMobile = useMedia("(max-width:768px)");

  return (
    <>
      {!isMobile && (
        <div className="w-1/5">
          <div className="border-b pb-5 capitalize flex flex-col">
            <h1 className="mb-2">Region</h1>
            {locations.map((location) => {
              const equal = isEqual(searchParams.city, location.name);
              return (
                <Link
                  href={{
                    pathname: "/search",
                    query: { ...searchParams, city: location.name },
                  }}
                  key={location.id}
                  className={`${
                    equal
                      ? "font-semibold text-blue-800"
                      : "font-light ease-in-out duration-300 hover:font-bold"
                  } text-reg`}
                >
                  {location.name}
                </Link>
              );
            })}
          </div>
          <div className="border-b pb-4 mt-5 capitalize flex flex-col">
            <h1 className="mb-2">Cuisine</h1>
            {cuisines.map((cuisine) => {
              const equal = isEqual(searchParams.cuisine, cuisine.name);
              return (
                <Link
                  href={{
                    pathname: "/search",
                    query: { ...searchParams, cuisine: cuisine.name },
                  }}
                  key={cuisine.id}
                  className={`${
                    equal
                      ? "font-semibold text-blue-800"
                      : "font-light ease-in-out duration-300 hover:font-bold"
                  } text-reg`}
                >
                  {cuisine.name}
                </Link>
              );
            })}
          </div>
          <div className="mt-3 pb-4">
            <h1 className="mb-2">Price</h1>
            <div className="flex text-center">
              {prices.map(({ price, label, className }) => {
                const equal = isEqual(searchParams.price, price);

                return (
                  <Link
                    className={`${
                      equal
                        ? "bg-gray-300 font-semibold text-blue-800"
                        : "ease-in-out duration-300 hover:bg-gray-200"
                    } ${className} cursor-pointer `}
                    href={{
                      pathname: "/search",
                      query: { ...searchParams, price },
                    }}
                  >
                    {label}
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default SearchSideBar;
