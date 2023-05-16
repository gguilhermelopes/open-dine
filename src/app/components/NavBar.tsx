import Link from "next/link";
import LoginModal from "./LoginModal";

const NavBar = () => {
  return (
    <nav className="bg-white p-4 flex justify-between items-center">
      <Link href="/" className="font-bold text-gray-700 text-2xl">
        OpenDine
      </Link>
      <div>
        <div className="flex gap-2 lg:gap-5">
          <LoginModal isLogin={true} />
          <LoginModal />
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
