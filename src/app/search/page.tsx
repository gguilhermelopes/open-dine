const Search = () => {
  return (
    <div className="min-h-screen w-screen bg-gray-100">
      <header className="max-w-screen-2xl m-auto bg-white">
        <nav className="bg-white p-4 flex justify-between items-center">
          <a href="" className="font-bold text-gray-700 text-2xl">
            {" "}
            OpenDine{" "}
          </a>
          <div>
            <div className="flex gap-2 lg:gap-5">
              <button className="bg-blue-400 text-white border p-1 px-4 rounded-md">
                Sign in
              </button>
              <button className="text-black border p-1 px-4 rounded-md">
                Sign up
              </button>
            </div>
          </div>
        </nav>

        <div className="bg-gradient-to-r from-[#5f6984] to-[#0f1f47] p-2">
          <div className="text-left text-sm lg:text-lg py-3 m-auto flex justify-center">
            <input
              type="text"
              className="rounded mr-3 p-2 w-[75%] lg:w-[450px] bg-white"
              placeholder="State, city or town"
            />
            <button className="rounded bg-red-700 px-2 lg:px-9 py-2">
              Let's go!
            </button>
          </div>
        </div>

        <section className="flex py-4 m-auto justify-between items-start w-2/3 text-gray-800">
          <div className="w-1/5">
            <div className="border-b pb-4">
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

          <div className="w-5/6">
            <div className="border-b flex pb-5 gap-5">
              <img
                src="https://resizer.otstatic.com/v2/photos/legacy/3/46883778.jpg"
                alt=""
                className="w-44 rounded"
              />
              <div>
                <h2 className="text-3xl text-[#0f1f47]">Grounded Kitchen</h2>
                <div className="flex items-start gap-2">
                  <div className="flex mb-2">*****</div>
                  <p className="text-sm">Exceptional</p>
                </div>

                <div className="mb-9">
                  <div className="font-light flex text-reg gap-2">
                    <p>$$$</p>
                    <p>Barbecue</p>
                    <p>Downtown</p>
                  </div>
                </div>
                <div>
                  <a href="" className="text-red-600">
                    {" "}
                    View more information{" "}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </header>
    </div>
  );
};

export default Search;
