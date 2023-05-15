import { Review } from "@prisma/client";
import calculateReviewRatingAverage from "../../../../../utils/calculateReviewRatingAverage";

const Rating = ({ reviews }: { reviews: Review[] }) => {
  const ratingAvg = calculateReviewRatingAverage(reviews);
  return (
    <div className="flex gap-4 items-end text-reg">
      <div className="ratings mt-2 flex gap-3 items-center ">
        <p>*****</p>
        <p>{ratingAvg.toFixed(2)}</p>
      </div>
      <p>
        {reviews.length} Review{reviews.length === 1 ? "" : "s"}
      </p>
    </div>
  );
};

export default Rating;
