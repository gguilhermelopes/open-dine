import Link from "next/link";
import Price from "@/app/components/Price";
import { RestaurantCardType } from "@/app/restaurant/page";
import calculateReviewRatingAverage from "../../../../utils/calculateReviewRatingAverage";
import Stars from "@/app/components/Stars";

const setTextRating = (rating: number): string => {
  if (rating >= 4.5) return "Exceptional";
  else if (rating >= 3.5 && rating < 4.5) return "Awesome";
  else if (rating >= 2.5 && rating < 3.5) return "Great";
  else return "Good";
};

const RestaurantCard = ({ restaurant }: { restaurant: RestaurantCardType }) => {
  const reviewAvg = calculateReviewRatingAverage(restaurant.reviews);
  const textRating = setTextRating(reviewAvg);
  return (
    <div className="border-b flex pb-5 gap-5">
      <img
        src={restaurant.main_image}
        alt=""
        className="w-44 h-36 object-cover rounded"
      />
      <div>
        <h2 className="text-3xl text-[#0f1f47]">{restaurant.name}</h2>
        <div className="flex items-center gap-2">
          <Stars reviews={restaurant.reviews} />
          <p className="text-sm">{textRating}</p>
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
