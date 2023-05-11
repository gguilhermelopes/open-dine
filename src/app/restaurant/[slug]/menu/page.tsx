import RestaurantNavbar from "../components/RestaurantNavbar";
import Menu from "../components/Menu";

const RestaurantMenu = () => {
  return (
    <>
      <div className="bg-white w-[100%] m-auto rounded p-3 shadow">
        <RestaurantNavbar />
        <Menu />
      </div>
    </>
  );
};

export default RestaurantMenu;
