import SearchBar from "../components/SearchBar";
import RestaurantCard from "./components/RestaurantCard";
import SearchSideBar from "./components/SearchSideBar";

const Search = () => {
  return (
    <>
      <div className="bg-gradient-to-r from-[#5f6984] to-[#0f1f47] p-2">
        <SearchBar />
      </div>
      <main className="flex py-4 m-auto justify-between items-start w-2/3 text-gray-800">
        <SearchSideBar />
        <div className="w-5/6">
          <RestaurantCard />
        </div>
      </main>
    </>
  );
};

export default Search;
