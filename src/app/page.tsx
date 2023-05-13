import Header from "./components/Header";
import RestaurantCard from "./components/RestaurantCard";
import { PrismaClient, Cuisine, Location, PRICE } from "@prisma/client";

const prisma = new PrismaClient();

export interface RestaurantCardType {
  id: number;
  name: string;
  main_image: string;
  slug: string;
  cuisine: Cuisine;
  location: Location;
  price: PRICE;
}

export const select = {
  id: true,
  name: true,
  main_image: true,
  slug: true,
  price: true,
  cuisine: true,
  location: true,
};

const fetchRestaurants = async (): Promise<RestaurantCardType[]> => {
  const restaurants = await prisma.restaurant.findMany({
    select,
    orderBy: {
      name: "asc",
    },
  });
  return restaurants;
};

export default async function Home() {
  const restaurantsData = await fetchRestaurants();

  return (
    <>
      <Header />
      <main className="py-3 px-3 mt-5 sm:mt-10 flex flex-wrap justify-center">
        {restaurantsData &&
          restaurantsData.map((restaurant) => (
            <RestaurantCard key={restaurant.id} restaurant={restaurant} />
          ))}
      </main>
    </>
  );
}
