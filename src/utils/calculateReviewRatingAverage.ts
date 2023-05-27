import { Review } from "@prisma/client";

const calculateReviewRatingAverage = (reviews: Review[]) => {
  if (!reviews.length) return 0;
  return (
    reviews.reduce((a, b) => {
      return a + b.rating;
    }, 0) / reviews.length
  );
};

export default calculateReviewRatingAverage;
