import Link from "next/link";
import { RestaurantCardType } from "../page";
import Price from "./Price";

interface Props {
  restaurant: RestaurantCardType;
}

const RestaurantCard = ({ restaurant }: Props) => {
  return (
    <Link href={`restaurant/${restaurant.slug}`}>
      <div className="w-64 h-72 m-3 rounded overflow-hidden border cursor-pointer text-gray-800">
        <img
          src={restaurant.main_image}
          alt=""
          className="w-full h-[50%] object-cover"
        />
        <div className="p-3">
          <h3 className="font-bold text-2xl mb-2">{restaurant.name}</h3>
          <div className="flex gap-3 items-start">
            <div className="flex mb-2">*****</div>
            <p>77 reviews</p>
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
