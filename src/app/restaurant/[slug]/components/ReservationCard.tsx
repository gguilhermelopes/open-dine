"use client";

import ReactDatePicker from "react-datepicker";
import { partySize as partySizes, times } from "../../../../../data";
import { useState } from "react";
import useAvailabilities from "../../../../../hooks/useAvailabilities";
import { CircularProgress } from "@mui/material";
import Link from "next/link";
import convertToDisplayTime from "../../../../../utils/convertToDisplayTime";

interface Props {
  openTime: string;
  closeTime: string;
  slug: string;
}

const ReservationCard = ({ openTime, closeTime, slug }: Props) => {
  const [selectedDate, setSelectedDate] = useState<Date | null>(new Date());
  const [time, setTime] = useState(openTime);
  const [partySize, setPartySize] = useState(2);
  const [day, setDay] = useState(new Date().toISOString().split("T")[0]);
  const { data, loading, error, fetchAvailabilities } = useAvailabilities();

  const handleClick = () => {
    fetchAvailabilities({
      slug,
      day,
      time,
      partySize,
    });
  };

  const handleDateChange = (date: Date | null) => {
    if (date) {
      setDay(date.toISOString().split("T")[0]);
      return setSelectedDate(date);
    }
    return setSelectedDate(null);
  };

  const filterTimeByRestaurantOpenWindow = () => {
    const timesWithinWindow: typeof times = [];

    let isWithinWindow = false;

    times.forEach((time) => {
      if (time.time === openTime) {
        isWithinWindow = true;
      }
      if (isWithinWindow) {
        timesWithinWindow.push(time);
      }
      if (time.time === closeTime) {
        isWithinWindow = false;
      }
    });
    return timesWithinWindow;
  };

  return (
    <div className="lg:fixed lg:w-[20%] bg-white rounded p-3 shadow flex flex-col">
      <div className=" border-b pb-2 font-bold">
        <h4 className="mr-7 text-lg">Make a reservation!</h4>
      </div>
      <div className="my-3 flex flex-col">
        <label htmlFor="peopleSelection">Party size</label>
        <select
          name="peopleSelection"
          id="peopleSelection"
          className="py-1 border-b font-light bg-white mt-1"
          value={partySize}
          onChange={({ target }) => setPartySize(+target.value)}
        >
          {partySizes.map((item) => (
            <option key={item.value} value={item.value}>
              {item.label}
            </option>
          ))}
        </select>
      </div>
      <div className="flex justify-between gap-4">
        <div className="flex flex-col lg:w-[48%] ">
          <label htmlFor="date">Date</label>
          <ReactDatePicker
            selected={selectedDate}
            onChange={handleDateChange}
            className="py-1 border-b font-light text-reg w-28"
            dateFormat="MMMM d"
            wrapperClassName="w-[48%]"
          />
        </div>

        <div className="flex flex-col lg:w-[48%] ">
          <label htmlFor="time">Time</label>
          <select
            value={time}
            onChange={({ target }) => setTime(target.value)}
            name="time"
            id="time"
            className="py-1.5 border-b font-light w-24 bg-white"
          >
            {filterTimeByRestaurantOpenWindow().map((time) => (
              <option key={time.displayTime} value={time.time}>
                {time.displayTime}
              </option>
            ))}
          </select>
        </div>
      </div>
      <div className="mt-5">
        <button
          onClick={handleClick}
          className="bg-red-600 rounded w-full px-4 text-white font-bold h-16 disabled:bg-gray-300"
          disabled={loading}
        >
          {loading ? (
            <CircularProgress size={20} color="inherit" />
          ) : (
            "Find a Time"
          )}
        </button>
      </div>
      {data?.length && !loading ? (
        <div className="mt-4">
          <p className="text-reg">Select a Time</p>
          <div className="flex flex-wrap flex-1 mt-2 justify-between gap-2">
            {data.map((item) =>
              item.available ? (
                <Link
                  className="bg-red-600 cursor-pointer px-4 py-2 w-24 text-center text-white rounded"
                  href={`/reserve/${slug}?date=${day}T${item.time}&partysize=${partySize}`}
                >
                  <p className="text-sm font-bold">
                    {convertToDisplayTime(item.time)}
                  </p>
                </Link>
              ) : (
                <span className="bg-gray-300 px-4 py-2 w-24 h-8 rounded" />
              )
            )}
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default ReservationCard;
