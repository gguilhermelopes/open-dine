import NavBar from "@/app/components/NavBar";
import RestaurantSummary from "./components/RestaurantSummary";
import SummaryForm from "./components/SummaryForm";

const Reservation = () => {
  return (
    <div className="min-h-screen w-full bg-gray-100">
      <header className="max-w-screen-2xl m-auto bg-white">
        <NavBar />
      </header>
      <section className="border-t h-screen text-gray-800">
        <div className="py-9 w-3/5 m-auto">
          <RestaurantSummary />
          <SummaryForm />
        </div>
      </section>
    </div>
  );
};

export default Reservation;
