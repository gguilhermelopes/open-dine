import { useRouter } from "next/navigation";
import { useState } from "react";
const SearchBar = () => {
  const router = useRouter();
  const [location, setLocation] = useState("");
  return (
    <div className="text-left text-sm lg:text-lg py-3 m-auto flex justify-center">
      <input
        type="text"
        className="rounded mr-3 p-2 w-[75%] lg:w-[450px] bg-white text-gray-800"
        placeholder="State, city or town"
        value={location}
        onChange={({ target }) => setLocation(target.value)}
      />
      <button
        className="rounded bg-red-700 px-2 lg:px-9 py-2 text-white"
        onClick={() => {
          if (location === "banana") return;
          router.push("/search");
        }}
      >
        Let's go!
      </button>
    </div>
  );
};

export default SearchBar;
