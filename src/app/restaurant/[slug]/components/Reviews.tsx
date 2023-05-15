import React from "react";
import ReviewCard from "./ReviewCard";
import { Review } from "@prisma/client";

const Reviews = ({ reviews }: { reviews: Review[] }) => {
  return (
    <div className="mt-10">
      {reviews.length ? (
        <>
          <h3 className="font-bold text-3xl border-b mb-7 pb-5">
            {`What ${reviews.length} ${
              reviews.length === 1 ? "person is saying" : "people are saying"
            }`}
          </h3>
          {reviews.map((review) => (
            <ReviewCard review={review} />
          ))}
        </>
      ) : (
        <h3 className="font-semibold text-md border-t pt-3">No reviews yet.</h3>
      )}
    </div>
  );
};

export default Reviews;
