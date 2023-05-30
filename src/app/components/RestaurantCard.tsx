import Link from "next/link";
import Price from "./Price";
import Stars from "./Stars";
import { RestaurantCardType } from "../page";

const RestaurantCard = ({ restaurant }: { restaurant: RestaurantCardType }) => {
  return (
    <Link href={`restaurant/${restaurant.slug}`}>
      <div className="w-64 h-72 rounded overflow-hidden border cursor-pointer text-gray-800 ease-in-out duration-300 hover:scale-105">
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
        </div>
      </div>
    </Link>
  );
};

export default RestaurantCard;
