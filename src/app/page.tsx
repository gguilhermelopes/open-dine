import Header from "./components/Header";
import RestaurantCard from "./components/RestaurantCard";

export default function Home() {
  return (
    <>
      <div className="min-h-screen w-full bg-gray-100">
        <Header />
        <main className="py-3 px-3 mt-5 sm:mt-10 flex flex-wrap justify-center ">
          <RestaurantCard />
        </main>
      </div>
    </>
  );
}
