import Header from "./components/Header";

export const metadata = {
  title: "Terraço Jardins | Open Dine",
  description: "Open Dine",
};

const RestaurantLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Header />
      <main className="w-full m-auto">
        <section className="flex flex-col lg:flex-row m-auto lg:w-2/3 lg:justify-between items-start mt-10 lg:-mt-11 text-gray-800">
          {children}
        </section>
      </main>
    </>
  );
};

export default RestaurantLayout;
