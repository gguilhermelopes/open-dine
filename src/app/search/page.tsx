import { PrismaClient } from "@prisma/client";
import SearchBar from "../components/SearchBar";
import RestaurantCard from "./components/RestaurantCard";
import SearchSideBar from "./components/SearchSideBar";
import { RestaurantCardType } from "../page";
import { select } from "../page";

const prisma = new PrismaClient();

export interface cuisineAndLocationType {
  id: number;
  name: string;
}

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

const locationFetch = (): Promise<cuisineAndLocationType[]> => {
  return prisma.location.findMany({ select: { id: true, name: true } });
};

const cuisineFetch = (): Promise<cuisineAndLocationType[]> => {
  return prisma.cuisine.findMany({ select: { id: true, name: true } });
};

const Search = async ({ searchParams }: { searchParams: { city: string } }) => {
  const { city } = searchParams;
  const restaurants = await fetchRestaurantsByCity(
    city.toLowerCase().trimStart()
  );

  const cities = await locationFetch();
  const cuisines = await cuisineFetch();

  return (
    <>
      <div className="bg-gradient-to-r from-[#5f6984] to-[#0f1f47] p-2">
        <SearchBar />
      </div>
      <main className="flex py-4 m-auto gap-8 justify-between items-start w-2/3 text-gray-800">
        <SearchSideBar cuisines={cuisines} cities={cities} />
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
