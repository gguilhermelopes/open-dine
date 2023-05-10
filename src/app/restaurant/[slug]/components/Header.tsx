import NavBar from "@/app/components/NavBar";

const Header = () => {
  return (
    <div className="h-80 sm:h-96 overflow-hidden">
      <div className="bg-center bg-gradient-to-r from-[#0f1f47] to-[#5f6984] h-full flex justify-center items-center">
        <h1 className="text-5xl lg:text-7xl md:text-6xl text-white capitalize text-shadow text-center">
          Terraço Jardins (São Paulo)
        </h1>
      </div>
    </div>
  );
};

export default Header;
