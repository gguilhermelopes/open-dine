import { PrismaClient, Restaurant } from "@prisma/client";
import RestaurantSummary from "./components/RestaurantSummary";
import SummaryForm from "./components/SummaryForm";
import { notFound } from "next/navigation";

const prisma = new PrismaClient();

const fetchRestaurantBySlug = async (slug: string): Promise<Restaurant> => {
  const restaurant = await prisma.restaurant.findUnique({
    where: {
      slug,
    },
  });
  if (!restaurant) {
    notFound();
  }
  return restaurant;
};

const Reservation = async ({
  params,
  searchParams,
}: {
  params: { slug: string };
  searchParams: {
    date: string;
    partySize: string;
  };
}) => {
  const restaurant = await fetchRestaurantBySlug(params.slug);

  return (
    <section className="border-t text-gray-800">
      <div className="py-9 w-3/5 m-auto">
        <RestaurantSummary
          image={restaurant.main_image}
          name={restaurant.name}
          date={searchParams.date}
          partySize={searchParams.partySize}
        />
        <SummaryForm />
      </div>
    </section>
  );
};

export default Reservation;
