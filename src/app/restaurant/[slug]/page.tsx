import NavBar from "@/app/components/NavBar";
import Link from "next/link";
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
      <Header />
      <main className="max-w-screen m-auto">
        <section className="flex flex-col lg:flex-row m-auto lg:w-2/3 lg:justify-between items-start mt-10 lg:-mt-11 text-gray-800 ">
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
        </section>
      </main>
    </>
  );
};

export default RestaurantDetails;
