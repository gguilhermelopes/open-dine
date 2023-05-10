import React from "react";

const RestaurantImages = () => {
  return (
    <div>
      <h1 className="font-bold text-3xl mt-10 border-b pb-5">5 photos</h1>
      <div className="flex flex-wrap gap-2 mt-6">
        <img
          src="https://resizer.otstatic.com/v2/photos/xlarge/2/52288036.jpg"
          alt=""
          className="w-56 h-44 rounded"
        />
        <img
          src="https://resizer.otstatic.com/v2/photos/xlarge/1/51500887.jpg"
          alt=""
          className="w-56 h-44 rounded"
        />
        <img
          src="https://resizer.otstatic.com/v2/photos/xlarge/1/51500885.jpg"
          alt=""
          className="w-56 h-44 rounded"
        />
        <img
          src="https://resizer.otstatic.com/v2/photos/xlarge/1/52053868.jpg"
          alt=""
          className="w-56 h-44 rounded"
        />
        <img
          src="https://resizer.otstatic.com/v2/photos/xlarge/1/51651409.jpg"
          alt=""
          className="w-56 h-44 rounded"
        />
      </div>
    </div>
  );
};

export default RestaurantImages;
