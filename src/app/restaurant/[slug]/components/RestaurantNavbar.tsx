import Link from "next/link";

const RestaurantNavbar = ({ slug }: { slug: string }) => {
  return (
    <nav className="flex gap-8 text-reg border-b pb-2">
      <Link
        className="hover:font-bold ease-in-out duration-300 w-16"
        href={`/restaurant/${slug}`}
      >
        Overview
      </Link>
      <Link
        className="hover:font-bold ease-in-out duration-300 "
        href={`/restaurant/${slug}/menu`}
      >
        Menu
      </Link>
    </nav>
  );
};

export default RestaurantNavbar;
