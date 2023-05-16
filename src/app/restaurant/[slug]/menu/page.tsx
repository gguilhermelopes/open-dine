import RestaurantNavbar from "../components/RestaurantNavbar";
import Menu from "../components/Menu";
import { PrismaClient } from "@prisma/client";
import { notFound } from "next/navigation";

const prisma = new PrismaClient();

const fetchMenu = async (slug: string) => {
  const restaurantMenu = await prisma.restaurant.findUnique({
    where: {
      slug,
    },
    select: {
      items: true,
    },
  });
  if (!restaurantMenu) notFound();
  return restaurantMenu.items;
};

const RestaurantMenu = async ({ params }: { params: { slug: string } }) => {
  const menu = await fetchMenu(params.slug);
  return (
    <>
      <div className="bg-white w-[100%] m-auto rounded p-3 shadow">
        <RestaurantNavbar slug={params.slug} />
        <Menu menu={menu} />
      </div>
    </>
  );
};

export default RestaurantMenu;
