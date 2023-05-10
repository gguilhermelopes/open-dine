import MenuCard from "./MenuCard";

const Menu = () => {
  return (
    <div className="bg-white mt-5">
      <div>
        <div className="mt-4 mb-1 pb-1">
          <h1 className="font-bold text-4xl">Menu</h1>
        </div>
        <div className="flex flex-wrap justify-between">
          <MenuCard />
        </div>
      </div>
    </div>
  );
};

export default Menu;
