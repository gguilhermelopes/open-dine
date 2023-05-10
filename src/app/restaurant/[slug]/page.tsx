import Header from "./components/Header";
import RestaurantNavbar from "./components/RestaurantNavbar";
import Title from "./components/Title";
import Rating from "./components/Rating";
import Description from "./components/Description";
import RestaurantImages from "./components/RestaurantImages";
import Reviews from "./components/Reviews";
import ReservationCard from "./components/ReservationCard";

const RestaurantDetails = () => {
  return (
    <>
      <div className="bg-white w-[70%] m-auto rounded p-3 shadow">
        <RestaurantNavbar />
        <Title />
        <Rating />
        <Description />
        <RestaurantImages />
        <Reviews />
      </div>
      <div className="lg:w-[27%] w-full p-10 lg:p-0 lg:relative text-reg text-gray-800">
        <ReservationCard />
      </div>
    </>
  );
};

export default RestaurantDetails;
