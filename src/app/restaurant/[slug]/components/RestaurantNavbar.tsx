import Link from "next/link";

const RestaurantNavbar = () => {
  return (
    <nav className="flex gap-7 test-reg border-b pb-2 ">
      <Link href="/restaurant/terraco-jardins">Overview</Link>
      <Link href="/restaurant/terraco-jardins/menu">Menu</Link>
    </nav>
  );
};

export default RestaurantNavbar;
