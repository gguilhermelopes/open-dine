import capitalizeTitle from "../../../../utils/capitalizeTitle";
import Header, { renderTitle } from "./components/Header";

interface Props {
  children: React.ReactNode;
  params: { slug: string };
}

export const generateMetadata = async ({ params }: Props) => {
  const titleLowerCase = renderTitle(params.slug);
  const titleUpperCase = capitalizeTitle(titleLowerCase);

  return {
    title: `${titleUpperCase} | Open Dine`,
    description: "Open Dine, find your table for any occasion!",
  };
};

const RestaurantLayout = ({ children, params }: Props) => {
  return (
    <>
      <Header title={params.slug} />
      <main className="w-full m-auto pb-10">
        <section className="flex flex-col lg:flex-row m-auto lg:w-2/3 lg:justify-between items-start mt-10 lg:-mt-11 text-gray-800">
          {children}
        </section>
      </main>
    </>
  );
};

export default RestaurantLayout;
