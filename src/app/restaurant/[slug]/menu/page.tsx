const RestaurantMenu = () => {
  return (
    <div className="min-h-screen w-screen bg-gray-100">
      <header className="max-w-screen-2xl m-auto bg-white">
        <nav className="bg-white p-4 flex justify-between items-center">
          <a href="" className="font-bold text-gray-700 text-2xl">
            {" "}
            OpenDine{" "}
          </a>
          <div>
            <div className="flex gap-5">
              <button className="bg-blue-400 text-white border p-1 px-4 rounded-md">
                Sign in
              </button>
              <button className="text-black border p-1 px-4 rounded-md">
                Sign up
              </button>
            </div>
          </div>
        </nav>

        <div className="h-80 sm:h-96 overflow-hidden">
          <div className="bg-center bg-gradient-to-r from-[#0f1f47] to-[#5f6984] h-full flex justify-center items-center">
            <h1 className="text-5xl lg:text-7xl md:text-6xl text-white capitalize text-shadow text-center">
              Terraço Jardins (São Paulo)
            </h1>
          </div>
        </div>
      </header>

      <main className="w-screen m-auto">
        <section className="flex flex-col lg:flex-row m-auto lg:w-2/3 lg:justify-between items-start 0 mt-10 lg:-mt-11 text-gray-800">
          <div className="bg-white w-[100%] m-auto rounded p-3 shadow">
            <nav className="flex gap-7 test-reg border-b pb-2 ">
              <a href="">Overview</a>
              <a href="">Menu</a>
            </nav>
            <div className="bg-white mt-5">
              <div>
                <div className="mt-4 mb-1 pb-1">
                  <h1 className="font-bold text-4xl">Menu</h1>
                </div>
                <div className="flex flex-wrap justify-between">
                  <div className="border rounded p-3 w-screen sm:w-[49%] mb-3">
                    <h3 className="font-bold text-lg">Hamburger and Fries</h3>
                    <p className="font-light mt-1 text-sm">
                      Classic American meal: juicy beef patty, melted cheese,
                      crispy fries; savory, satisfying, and undeniably
                      delicious.
                    </p>
                    <p className="mt-7">$30</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default RestaurantMenu;
