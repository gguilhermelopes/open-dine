import React from "react";
import ReviewCard from "./ReviewCard";

const Reviews = () => {
  return (
    <div className="mt-10">
      <h3 className="font-bold text-3xl border-b mb-7 pb-5">
        What 100 people are saying
      </h3>
      <ReviewCard />
    </div>
  );
};

export default Reviews;
