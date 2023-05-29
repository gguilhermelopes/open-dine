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

  return (
    <>
      <h3 className="text-lg">You're almost done!</h3>
      <div>
        <div className="flex mt-5 gap-4">
          <img src={image} alt={image} className="w-32 h-18 rounded" />
          <div>
            <h1 className="text-3xl font-bold">{name}</h1>
            <div className="flex mt-3 gap-6">
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
