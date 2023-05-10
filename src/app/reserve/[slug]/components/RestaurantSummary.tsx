import React from "react";

const RestaurantSummary = () => {
  return (
    <>
      <h3 className="text-lg">You're almost done!</h3>
      <div>
        <div className="flex mt-5 gap-4">
          <img
            src="https://resizer.otstatic.com/v2/photos/legacy/3/46883778.jpg"
            alt=""
            className="w-32 h-18 rounded"
          />
          <div>
            <h1 className="text-3xl font-bold">The Waverley - Elgin</h1>
            <div className="flex mt-3 gap-6">
              <p>Tuesday, May 9 2023</p>
              <p>7:30PM</p>
              <p>3 people</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default RestaurantSummary;
