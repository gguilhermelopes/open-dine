import React from "react";

const Description = ({ description }: { description: string }) => {
  return <p className="text-lg font-light mt-4">{description}</p>;
};

export default Description;
