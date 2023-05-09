const SearchSideBar = () => {
  return (
    <div className="w-1/5">
      <div className="border-b pb-5">
        <h1 className="mb-2">Region</h1>
        <p className="font-light text-reg">Toronto</p>
        <p className="font-light text-reg">Ottawa</p>
        <p className="font-light text-reg">Montreal</p>
        <p className="font-light text-reg">Hamilton</p>
        <p className="font-light text-reg">Niagara</p>
        <p className="font-light text-reg">Kingston</p>
      </div>
      <div className="border-b pb-4 mt-5">
        <h1 className="mb-2">Cuisine</h1>
        <p className="font-light text-reg">Mexican</p>
        <p className="font-light text-reg">Italian</p>
        <p className="font-light text-reg">Chinese</p>
        <p className="font-light text-reg">Brazilian</p>
        <p className="font-light text-reg">French</p>
      </div>
      <div className="mt-3 pb-4">
        <h1 className="mb-2">Price</h1>
        <div className="flex">
          <button className="border w-full text-reg font-light rounded-l">
            $
          </button>
          <button className="border-r border-t border-b w-full text-reg font-light ">
            $$
          </button>
          <button className="border-r border-t border-b w-full text-reg font-light rounded-r">
            $$$
          </button>
        </div>
      </div>
    </div>
  );
};

export default SearchSideBar;
