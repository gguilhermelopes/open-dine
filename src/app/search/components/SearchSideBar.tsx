import { cuisineAndLocationType } from "../page";

const SearchSideBar = ({
  cities,
  cuisines,
}: {
  cities: cuisineAndLocationType[];
  cuisines: cuisineAndLocationType[];
}) => {
  return (
    <div className="w-1/5">
      <div className="border-b pb-5 capitalize">
        <h1 className="mb-2">Region</h1>
        {cities.map((city) => (
          <p className="font-light text-reg">{city.name}</p>
        ))}
      </div>
      <div className="border-b pb-4 mt-5 capitalize">
        <h1 className="mb-2">Cuisine</h1>
        {cuisines.map((cuisine) => (
          <p className="font-light text-reg">{cuisine.name}</p>
        ))}
      </div>
      <div className="mt-3 pb-4">
        <h1 className="mb-2">Price</h1>
        <div className="flex">
          <button className="border w-full text-reg font-light rounded-l">
            $
          </button>
          <button className="border-r border-t border-b w-full text-reg font-light ">
            $$
          </button>
          <button className="border-r border-t border-b w-full text-reg font-light rounded-r">
            $$$
          </button>
        </div>
      </div>
    </div>
  );
};

export default SearchSideBar;
