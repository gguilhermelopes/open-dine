import { renderTitle } from "@/app/restaurant/[slug]/components/Header";
import capitalizeTitle from "@/utils/capitalizeTitle";

interface Props {
  children: React.ReactNode;
  params: { slug: string };
}

export const generateMetadata = async ({ params }: Props) => {
  const titleLowerCase = renderTitle(params.slug);
  const titleUpperCase = capitalizeTitle(titleLowerCase);

  return {
    title: `Reserve at ${titleUpperCase} | Open Dine`,
    description: "Open Dine, find your table for any occasion!",
  };
};

const ReserveLayout = ({ children }: { children: React.ReactNode }) => {
  return <>{children}</>;
};

export default ReserveLayout;
