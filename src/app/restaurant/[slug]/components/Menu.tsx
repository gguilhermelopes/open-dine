import { Item } from "@prisma/client";
import MenuCard from "./MenuCard";

const Menu = ({ menu }: { menu: Item[] }) => {
  return (
    <div className="bg-white mt-5">
      <div>
        <div className="mt-4 mb-1 pb-1">
          <h1 className="font-bold text-4xl">Menu</h1>
        </div>
        <div className="flex flex-wrap justify-between">
          {menu.length ? (
            menu.map((item) => <MenuCard key={item.id} item={item} />)
          ) : (
            <p className="mt-5">No menu available.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Menu;
