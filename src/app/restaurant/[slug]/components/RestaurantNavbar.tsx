import Link from "next/link";

const RestaurantNavbar = ({ slug }: { slug: string }) => {
  return (
    <nav className="flex gap-7 test-reg border-b pb-2 ">
      <Link href={`/restaurant/${slug}`}>Overview</Link>
      <Link href={`/restaurant/${slug}/menu`}>Menu</Link>
    </nav>
  );
};

export default RestaurantNavbar;
