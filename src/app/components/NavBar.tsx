import Link from "next/link";

const NavBar = () => {
  return (
    <nav className="bg-white p-4 flex justify-between items-center">
      <Link href="/" className="font-bold text-gray-700 text-2xl">
        OpenDine
      </Link>
      <div>
        <div className="flex gap-2 lg:gap-5">
          <button className="bg-blue-400 text-white border p-1 px-4 rounded-md">
            Sign in
          </button>
          <button className="text-black border p-1 px-4 rounded-md">
            Sign up
          </button>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
