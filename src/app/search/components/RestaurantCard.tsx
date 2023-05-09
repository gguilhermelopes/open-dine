import Link from "next/link";

const RestaurantCard = () => {
  return (
    <div className="border-b flex pb-5 gap-5">
      <img
        src="https://resizer.otstatic.com/v2/photos/legacy/3/46883778.jpg"
        alt=""
        className="w-44 rounded"
      />
      <div>
        <h2 className="text-3xl text-[#0f1f47]">Grounded Kitchen</h2>
        <div className="flex items-start gap-2">
          <div className="flex mb-2">*****</div>
          <p className="text-sm">Exceptional</p>
        </div>

        <div className="mb-9">
          <div className="font-light flex text-reg gap-2">
            <p>$$$</p>
            <p>Barbecue</p>
            <p>Downtown</p>
          </div>
        </div>
        <div>
          <Link href="restaurant/terraco-jardins" className="text-red-600">
            View more information
          </Link>
        </div>
      </div>
    </div>
  );
};

export default RestaurantCard;
