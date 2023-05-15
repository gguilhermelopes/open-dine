import { Cuisine, Location, PRICE } from "@prisma/client";
import Link from "next/link";
import { SearchParams } from "../page";

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

  return (
    <div className="w-1/5">
      <div className="border-b pb-5 capitalize flex flex-col">
        <h1 className="mb-2">Region</h1>
        {locations.map((location) => (
          <Link
            href={{
              pathname: "/search",
              query: { ...searchParams, city: location.name },
            }}
            key={location.id}
            className="font-light text-reg"
          >
            {location.name}
          </Link>
        ))}
      </div>
      <div className="border-b pb-4 mt-5 capitalize flex flex-col">
        <h1 className="mb-2">Cuisine</h1>
        {cuisines.map((cuisine) => (
          <Link
            href={{
              pathname: "/search",
              query: { ...searchParams, cuisine: cuisine.name },
            }}
            key={cuisine.id}
            className="font-light text-reg"
          >
            {cuisine.name}
          </Link>
        ))}
      </div>
      <div className="mt-3 pb-4">
        <h1 className="mb-2">Price</h1>
        <div className="flex text-center">
          {prices.map(({ price, label, className }) => (
            <Link
              className={className}
              href={{
                pathname: "/search",
                query: { ...searchParams, price },
              }}
            >
              {label}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SearchSideBar;
