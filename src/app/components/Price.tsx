import { PRICE } from "@prisma/client";

const Price = ({ price }: { price: PRICE }) => {
  const renderPrice = () => {
    switch (price) {
      case PRICE.CHEAP:
        return (
          <>
            <span>$</span>
            <span className="opacity-20">$$$</span>
          </>
        );

      case PRICE.REGULAR:
        return (
          <>
            <span>$$</span>
            <span className="opacity-20">$$</span>
          </>
        );

      case PRICE.EXPENSIVE:
        return (
          <>
            <span>$$$$</span>
          </>
        );

      default:
        return <span className="opacity-20">$$$$</span>;
    }
  };

  return <p className="font-medium">{renderPrice()}</p>;
};

export default Price;
