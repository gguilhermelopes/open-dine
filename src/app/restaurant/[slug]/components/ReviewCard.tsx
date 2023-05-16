import Stars from "@/app/components/Stars";
import { Review } from "@prisma/client";

const ReviewCard = ({ review }: { review: Review }) => {
  const fullName = `${review.first_name} ${review.last_name}`;
  const initials = `${review.first_name.charAt(0)}${review.last_name.charAt(
    0
  )}`.toUpperCase();

  return (
    <div>
      <div className="border-b pb-3 md:pb-7 mb-3 md:mb-7">
        <div className="flex gap-10">
          <div className="w-1/6 flex flex-col items-center justify-center text-center gap-2">
            <div className="rounded-full bg-blue-400 w-12 md:w-16 h-12 md:h-16 flex items-center justify-center">
              <h2 className="text-white text-md md:text-2xl">{initials}</h2>
            </div>
            <p>{fullName}</p>
          </div>

          <div className="w-5/6">
            <div className="flex items-center gap-5">
              <Stars rating={review.rating} reviews={[]} />
            </div>
            <div className="mt-5">
              <p className="text-sm md:text-lg font-light">{review.text}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReviewCard;
