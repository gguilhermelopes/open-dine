const ReviewCard = () => {
  return (
    <div>
      <div className="border-b pb-7 mb-7">
        <div className="flex">
          <div className="w-1/6 flex flex-col items-center justify-center text-center gap-2">
            <div className="rounded-full bg-blue-400 w-16 h-16 flex items-center justify-center">
              <h2 className="text-white text-2xl">SW</h2>
            </div>
            <p>Steven Wilson</p>
          </div>

          <div className="ml-10 w-5/6">
            <div className="flex items-center gap-5">
              <div className="flex">*****</div>
            </div>
            <div className="mt-5">
              <p className="text-lg font-light">
                Great customer service, kindness and efficiency! Food was
                delicious and great presentation!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReviewCard;
