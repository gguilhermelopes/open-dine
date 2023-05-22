"use client";

import ReactDatePicker from "react-datepicker";
import { partySize } from "../../../../../data/partySize";
import { useState } from "react";

const ReservationCard = () => {
  const [selectedDate, setSelectedDate] = useState<Date | null>(new Date());

  const handleDateChange = (date: Date | null) => {
    if (date) {
      return setSelectedDate(date);
    }
    return setSelectedDate(null);
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
        >
          {partySize.map((item) => (
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
            name="time"
            id="time"
            className="py-1.5 border-b font-light w-24 bg-white"
          >
            <option value="">12:30 PM</option>
            <option value="">13:30 PM</option>
          </select>
        </div>
      </div>
      <div className="mt-5">
        <button className="bg-red-600 rounded w-full px-4 text-white font-bold h-16">
          Find a Time
        </button>
      </div>
    </div>
  );
};

export default ReservationCard;
