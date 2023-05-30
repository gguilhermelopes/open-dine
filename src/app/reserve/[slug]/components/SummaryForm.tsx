"use client";

import Input from "@/app/components/Input";
import useReservation from "@/hooks/useReservation";
import { CircularProgress } from "@mui/material";
import { ChangeEvent, useEffect, useState } from "react";

interface SummaryFormProps {
  slug: string;
  partySize: string;
  date: string;
}

const SummaryForm = ({ slug, partySize, date }: SummaryFormProps) => {
  const [inputs, setInputs] = useState({
    bookerFirstName: "",
    bookerLastName: "",
    bookerEmail: "",
    bookerPhone: "",
    bookerOccasion: null,
    bookerRequests: "",
  });
  const [disabled, setDisabled] = useState(true);
  const [didBook, setDidBook] = useState(false);
  const { loading, error, createReservation } = useReservation();

  useEffect(() => {
    if (
      inputs.bookerFirstName &&
      inputs.bookerLastName &&
      inputs.bookerEmail &&
      inputs.bookerPhone
    )
      return setDisabled(false);

    return setDisabled(true);
  }, [inputs]);

  const [day, time] = date.split("T");

  const handleChangeInput = (
    event: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLSelectElement>
  ): void => {
    setInputs({
      ...inputs,
      [event.target.id]: event.target.value,
    });
  };

  const handleClick = async () => {
    const booking = await createReservation({
      slug,
      partySize,
      day,
      time,
      bookerFirstName: inputs.bookerFirstName,
      bookerLastName: inputs.bookerLastName,
      bookerEmail: inputs.bookerEmail,
      bookerPhone: inputs.bookerPhone,
      bookerOccasion: inputs.bookerOccasion,
      bookerRequests: inputs.bookerRequests,
      setDidBook,
    });
  };

  return (
    <>
      {didBook ? (
        <div className="mt-10 md:w-[660px]">
          <h2 className="text-2xl">You are all booked up!</h2>
          <p className="text-md mt-5">
            Enjoy your reservation. Check your email for more information on
            your booking.
          </p>
        </div>
      ) : (
        <form className="mt-10 flex flex-wrap gap-4 justify-between md:w-[660px] ">
          <Input
            id="bookerFirstName"
            placeholder="First name"
            className="w-full md:w-[48%]"
            value={inputs.bookerFirstName}
            onChange={handleChangeInput}
          />
          <Input
            id="bookerLastName"
            placeholder="Last name"
            className="w-full md:w-[48%]"
            value={inputs.bookerLastName}
            onChange={handleChangeInput}
          />
          <Input
            type="phone"
            id="bookerPhone"
            placeholder="Phone number"
            className="w-full md:w-[48%]"
            value={inputs.bookerPhone}
            onChange={handleChangeInput}
          />
          <Input
            id="bookerEmail"
            placeholder="Email"
            className="w-full md:w-[48%]"
            value={inputs.bookerEmail}
            onChange={handleChangeInput}
          />

          <select
            name="occasion"
            id="bookerOccasion"
            className="border rounded px-1 py-2 md:px-2 md:py-3 bg-white text-gray-400 w-full md:w-[48%]"
            placeholder="Select an occasion (optional)"
            onChange={handleChangeInput}
            defaultValue="select"
          >
            <option value="select" disabled>
              Select an occasion (optional)
            </option>
            <option value="BIRTHDAY">Birthday</option>
            <option value="ANNIVERSARY">Anniversary</option>
            <option value="DATE_NIGHT">Date Night</option>
            <option value="BUSINESS_MEAL">Business Meal</option>
          </select>
          <Input
            id="bookerRequests"
            placeholder="Requests (optional)"
            className="w-full md:w-[48%]"
            value={inputs.bookerRequests}
            onChange={handleChangeInput}
          />

          <button
            disabled={disabled || loading}
            className="bg-red-600 w-full flex justify-center items-center p-3 text-white font-bold rounded disabled:bg-gray-300"
            onClick={handleClick}
          >
            {loading ? (
              <CircularProgress size={20} color="inherit" />
            ) : (
              "Complete reservation"
            )}
          </button>
          {error && <p className="text-red-600">{error}</p>}
          <p className="text-sm">
            By clicking “Complete reservation” you agree to the OpenTable Terms
            of Use and Privacy Policy. Standard text message rates may apply.
            You may opt out of receiving text messages at any time.
          </p>
        </form>
      )}
    </>
  );
};

export default SummaryForm;
