import RestaurantNavbar from "./components/RestaurantNavbar";
import Title from "./components/Title";
import Rating from "./components/Rating";
import Description from "./components/Description";
import RestaurantImages from "./components/RestaurantImages";
import Reviews from "./components/Reviews";
import ReservationCard from "./components/ReservationCard";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

interface Restaurant {
  id: number;
  name: string;
  images: string[];
  slug: string;
  description: string;
}

const fetchRestaurantBySlug = async (slug: string): Promise<Restaurant> => {
  const restaurant = await prisma.restaurant.findUnique({
    where: {
      slug,
    },
    select: {
      id: true,
      name: true,
      images: true,
      slug: true,
      description: true,
    },
  });
  if (!restaurant) throw new Error();
  return restaurant;
};

const RestaurantDetails = async ({ params }: { params: { slug: string } }) => {
  const restaurantData = await fetchRestaurantBySlug(params.slug);

  return (
    <>
      <div className="bg-white w-[70%] m-auto rounded p-3 shadow">
        <RestaurantNavbar slug={params.slug} />
        <Title name={restaurantData.name} />
        <Rating />
        <Description description={restaurantData.description} />
        <RestaurantImages images={restaurantData.images} />
        <Reviews />
      </div>
      <div className="lg:w-[27%] w-full p-10 lg:p-0 lg:relative text-reg text-gray-800">
        <ReservationCard />
      </div>
    </>
  );
};

export default RestaurantDetails;
