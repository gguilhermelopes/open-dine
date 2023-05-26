import RestaurantNavbar from "./components/RestaurantNavbar";
import Title from "./components/Title";
import Rating from "./components/Rating";
import Description from "./components/Description";
import RestaurantImages from "./components/RestaurantImages";
import Reviews from "./components/Reviews";
import ReservationCard from "./components/ReservationCard";
import { PrismaClient, Review } from "@prisma/client";
import { notFound } from "next/navigation";

const prisma = new PrismaClient();

interface Restaurant {
  id: number;
  name: string;
  images: string[];
  slug: string;
  description: string;
  reviews: Review[];
  open_time: string;
  close_time: string;
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
      reviews: true,
      open_time: true,
      close_time: true,
    },
  });
  if (!restaurant) notFound();
  return restaurant;
};

const RestaurantDetails = async ({ params }: { params: { slug: string } }) => {
  const restaurantData = await fetchRestaurantBySlug(params.slug);

  return (
    <>
      <div className="bg-white w-full lg:w-[70%] m-auto rounded p-3 shadow">
        <RestaurantNavbar slug={params.slug} />
        <Title name={restaurantData.name} />
        <Rating reviews={restaurantData.reviews} />
        <Description description={restaurantData.description} />
        <RestaurantImages images={restaurantData.images} />
        <Reviews reviews={restaurantData.reviews} />
      </div>
      <div className="lg:w-[27%] w-full p-10 lg:p-0 lg:relative text-reg text-gray-800">
        <ReservationCard
          slug={restaurantData.slug}
          openTime={restaurantData.open_time}
          closeTime={restaurantData.close_time}
        />
      </div>
    </>
  );
};

export default RestaurantDetails;
