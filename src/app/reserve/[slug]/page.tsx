import NavBar from "@/app/components/NavBar";
import RestaurantSummary from "./components/RestaurantSummary";
import SummaryForm from "./components/SummaryForm";

const Reservation = () => {
  return (
    <section className="border-t h-screen text-gray-800">
      <div className="py-9 w-3/5 m-auto">
        <RestaurantSummary />
        <SummaryForm />
      </div>
    </section>
  );
};

export default Reservation;
