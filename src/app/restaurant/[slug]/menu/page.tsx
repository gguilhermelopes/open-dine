import NavBar from "@/app/components/NavBar";
import Header from "../components/Header";
import RestaurantNavbar from "../components/RestaurantNavbar";
import Menu from "../components/Menu";

const RestaurantMenu = () => {
  return (
    <div className="min-h-screen w-screen bg-gray-100">
      <header className="max-w-screen-2xl m-auto bg-white">
        <Header />
      </header>
      <main className="w-screen m-auto">
        <section className="flex flex-col lg:flex-row m-auto lg:w-2/3 lg:justify-between items-start 0 mt-10 lg:-mt-11 text-gray-800">
          <div className="bg-white w-[100%] m-auto rounded p-3 shadow">
            <RestaurantNavbar />
            <Menu />
          </div>
        </section>
      </main>
    </div>
  );
};

export default RestaurantMenu;
