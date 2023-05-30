import Link from "next/link";
import Price from "./Price";
import Stars from "./Stars";
import { Cuisine, Location, PRICE, Review } from "@prisma/client";

interface RestaurantCardType {
  id: number;
  name: string;
  main_image: string;
  slug: string;
  cuisine: Cuisine;
  location: Location;
  price: PRICE;
  reviews: Review[];
}

const RestaurantCard = ({ restaurant }: { restaurant: RestaurantCardType }) => {
  return (
    <Link href={`restaurant/${restaurant.slug}`}>
      <div className="w-64 h-72 m-3 rounded overflow-hidden border cursor-pointer text-gray-800">
        <img
          src={restaurant.main_image}
          alt=""
          className="w-full h-[50%] object-cover"
        />
        <div className="p-3">
          <h3 className="font-bold text-xl mb-2">{restaurant.name}</h3>
          <div className="flex gap-3 items-center ">
            <Stars reviews={restaurant.reviews} />
            <p>{`${restaurant.reviews.length} ${
              restaurant.reviews.length === 1 ? "review" : "reviews"
            }`}</p>
          </div>
          <div className="flex gap-3 text-reg font-light capitalize">
            <p>{restaurant.cuisine.name}</p>
            <Price price={restaurant.price} />
            <p>{restaurant.location.name}</p>
          </div>
          <p className="text-sm mt-1 font-bold">Booked 3 times today</p>
        </div>
      </div>
    </Link>
  );
};

export default RestaurantCard;
