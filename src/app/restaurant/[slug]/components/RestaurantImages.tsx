const RestaurantImages = ({ images }: { images: string[] }) => {
  return (
    <div>
      <h1 className="font-bold text-3xl mt-10 border-b pb-5">
        {images.length} photo{images.length > 1 && "s"}
      </h1>
      <div className="flex flex-wrap gap-4 mt-6 justify-center">
        {images.map((image) => (
          <img src={image} className="w-56 h-44 rounded" />
        ))}
      </div>
    </div>
  );
};

export default RestaurantImages;
