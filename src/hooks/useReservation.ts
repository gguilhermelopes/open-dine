import axios from "axios";
import { Dispatch, SetStateAction, useState } from "react";
import { MAIN_URL } from "./useAuth";
import { OCCASION } from "@prisma/client";

interface Props {
  slug: string;
  partySize: string;
  day: string;
  time: string;
  bookerFirstName: string;
  bookerLastName: string;
  bookerEmail: string;
  bookerPhone: string;
  bookerOccasion: OCCASION | null;
  bookerRequests: string;
  setDidBook: Dispatch<SetStateAction<boolean>>;
}

const useReservation = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const createReservation = async ({
    slug,
    partySize,
    day,
    time,
    bookerFirstName,
    bookerLastName,
    bookerEmail,
    bookerPhone,
    bookerOccasion,
    bookerRequests,
    setDidBook,
  }: Props) => {
    setLoading(true);
    try {
      const response = await axios.post(
        `${MAIN_URL}/api/restaurant/${slug}/reserve`,
        {
          bookerFirstName,
          bookerLastName,
          bookerEmail,
          bookerPhone,
          bookerOccasion,
          bookerRequests,
        },
        {
          params: {
            day,
            time,
            partySize,
          },
        }
      );
      setLoading(false);
      setDidBook(true);
      return response.data;
    } catch (error: any) {
      setLoading(false);

      setError(error.response.data.errorMessage);
    }
  };
  return {
    loading,
    error,
    createReservation,
  };
};

export default useReservation;
