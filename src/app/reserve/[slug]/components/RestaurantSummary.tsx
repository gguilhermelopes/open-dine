"use client";

import useMedia from "@/hooks/useMedia";
import convertToDisplayTime from "@/utils/convertToDisplayTime";
import { format } from "date-fns";

interface RestaurantSummaryProps {
  image: string;
  name: string;
  date: string;
  partySize: string;
}

const RestaurantSummary = ({
  image,
  name,
  date,
  partySize,
}: RestaurantSummaryProps) => {
  const [day, time] = date.split("T");
  const mobile = useMedia("(max-width:768px)");

  return (
    <>
      <h3 className="text-lg">You're almost done!</h3>
      <div>
        {mobile && (
          <img
            src={image}
            alt={image}
            className="w-32 h-24 rounded object-cover mt-4"
          />
        )}
        <div className="flex mt-5 gap-4">
          {!mobile && (
            <img
              src={image}
              alt={image}
              className="w-32 h-18 rounded object-cover"
            />
          )}
          <div>
            <h1 className="text-xl md:text-3xl font-bold">{name}</h1>
            <div className="flex mt-3 gap-6 text-sm md:text-md">
              <p>{format(new Date(date), "ccc, LLL dd")}</p>
              <p>{convertToDisplayTime(time)}</p>
              <p>
                {partySize} {+partySize === 1 ? "person" : "people"}
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default RestaurantSummary;
