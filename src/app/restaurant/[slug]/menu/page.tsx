import Header from "../components/Header";
import RestaurantNavbar from "../components/RestaurantNavbar";
import Menu from "../components/Menu";

const RestaurantMenu = () => {
  return (
    <>
      <Header />
      <main className="w-screen m-auto">
        <section className="flex flex-col lg:flex-row m-auto lg:w-2/3 lg:justify-between items-start 0 mt-10 lg:-mt-11 text-gray-800">
          <div className="bg-white w-[100%] m-auto rounded p-3 shadow">
            <RestaurantNavbar />
            <Menu />
          </div>
        </section>
      </main>
    </>
  );
};

export default RestaurantMenu;
