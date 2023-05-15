import { Cuisine, Location, PRICE, PrismaClient } from "@prisma/client";
import SearchBar from "../components/SearchBar";
import RestaurantCard from "./components/RestaurantCard";
import SearchSideBar from "./components/SearchSideBar";
import { RestaurantCardType } from "../page";
import { select } from "../page";

const prisma = new PrismaClient();

const fetchRestaurantsByCity = (
  city: string
): Promise<RestaurantCardType[]> => {
  if (!city) return prisma.restaurant.findMany({ select });
  return prisma.restaurant.findMany({
    where: {
      location: {
        name: {
          equals: city,
        },
      },
    },
    select,
  });
};

const locationFetch = (): Promise<Location[]> => {
  return prisma.location.findMany();
};

const cuisineFetch = (): Promise<Cuisine[]> => {
  return prisma.cuisine.findMany();
};

const Search = async ({
  searchParams,
}: {
  searchParams: { city?: string; cuisine?: string; price?: PRICE };
}) => {
  const { city } = searchParams;
  const restaurants = await fetchRestaurantsByCity(
    city ? city.toLowerCase().trimStart() : ""
  );

  const locations = await locationFetch();
  const cuisines = await cuisineFetch();

  return (
    <>
      <div className="bg-gradient-to-r from-[#5f6984] to-[#0f1f47] p-2">
        <SearchBar />
      </div>
      <main className="flex py-4 m-auto gap-8 justify-between items-start w-2/3 text-gray-800">
        <SearchSideBar
          cuisines={cuisines}
          locations={locations}
          searchParams={searchParams}
        />
        <div className="w-5/6 flex flex-col gap-4">
          {restaurants.length ? (
            restaurants.map((restaurant) => (
              <RestaurantCard key={restaurant.id} restaurant={restaurant} />
            ))
          ) : (
            <p className="text-center pt-10 text-2xl">
              No restaurants found in this area.
            </p>
          )}
        </div>
      </main>
    </>
  );
};

export default Search;
