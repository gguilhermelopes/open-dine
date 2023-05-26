import axios from "axios";
import { useState } from "react";
import { MAIN_URL } from "./useAuth";

interface Props {
  slug: string;
  partySize: number;
  day: string;
  time: string;
}

interface AvailabilityTypes {
  time: string;
  available: boolean;
}

const useAvailabilities = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [data, setData] = useState<AvailabilityTypes[] | null>(null);

  const fetchAvailabilities = async ({ slug, partySize, day, time }: Props) => {
    setLoading(true);
    try {
      const response = await axios.get(
        `${MAIN_URL}/api/restaurant/${slug}/availability`,
        {
          params: {
            day,
            time,
            partySize,
          },
        }
      );
      setLoading(false);
      setData(response.data);
    } catch (error: any) {
      setLoading(false);
      setData(null);
      setError(error.response.data.errorMessage);
    }
  };
  return {
    loading,
    data,
    error,
    fetchAvailabilities,
  };
};

export default useAvailabilities;
