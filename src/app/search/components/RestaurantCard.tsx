import Link from "next/link";
import Price from "@/app/components/Price";
import { RestaurantCardType } from "@/app/page";

const RestaurantCard = ({ restaurant }: { restaurant: RestaurantCardType }) => {
  return (
    <div className="border-b flex pb-5 gap-5">
      <img
        src={restaurant.main_image}
        alt=""
        className="w-44 h-36 object-cover rounded"
      />
      <div>
        <h2 className="text-3xl text-[#0f1f47]">{restaurant.name}</h2>
        <div className="flex items-start gap-2">
          <div className="flex mb-2">*****</div>
          <p className="text-sm">Exceptional</p>
        </div>

        <div className="mb-9">
          <div className="font-light flex text-reg gap-2 capitalize">
            <Price price={restaurant.price} />
            <p>{restaurant.cuisine.name}</p>
            <p>{restaurant.location.name}</p>
          </div>
        </div>
        <div>
          <Link href={`restaurant/${restaurant.slug}`} className="text-red-600">
            View more information
          </Link>
        </div>
      </div>
    </div>
  );
};

export default RestaurantCard;
