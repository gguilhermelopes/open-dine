import Link from "next/link";
const RestaurantCard = () => {
  return (
    <Link href="/restaurant/terraco-jardins">
      <div className="w-64 h-72 m-3 rounded overflow-hidden border cursor-pointer text-gray-800">
        <img
          src="https://resizer.otstatic.com/v2/photos/wide-huge/2/50912675.jpg"
          alt=""
          className="w-full"
        />
        <div className="p-3">
          <h3 className="font-bold text-2xl mb-2">Terraço Jardins</h3>
          <div className="flex gap-3 items-start">
            <div className="flex mb-2">*****</div>
            <p>77 reviews</p>
          </div>
          <div className="flex gap-3 text-reg font-light capitalize">
            <p>Mexican</p>
            <p>$$$</p>
            <p>São Paulo</p>
          </div>
          <p className="text-sm mt-1 font-bold">Booked 3 times today</p>
        </div>
      </div>
    </Link>
  );
};

export default RestaurantCard;
