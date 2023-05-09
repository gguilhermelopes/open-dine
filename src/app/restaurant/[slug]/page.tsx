import Link from "next/link";

const RestaurantDetails = () => {
  return (
    <div className="min-h-screen w-screen bg-gray-100">
      <header className="max-w-screen-2xl m-auto bg-white">
        <nav className="bg-white p-4 flex justify-between items-center">
          <Link href="/" className="font-bold text-gray-700 text-2xl">
            {" "}
            OpenDine{" "}
          </Link>
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
          <div className="bg-white w-[70%] m-auto rounded p-3 shadow">
            <nav className="flex gap-7 test-reg border-b pb-2 ">
              <Link href="/restaurant/terraco-jardins">Overview</Link>
              <Link href="/restaurant/terraco-jardins/menu">Menu</Link>
            </nav>

            <div className="mt-4 border-b pb-6">
              <h1 className="font-bold text-6xl">Terraço Jardins</h1>
            </div>
            <div className="flex gap-4 items-end text-reg">
              <div className="ratings mt-2 flex gap-3 items-center ">
                <p>*****</p>
                <p>4.9</p>
              </div>
              <p>650 Reviews</p>
            </div>
            <p className="text-lg font-light mt-4">
              Live a new experience at Terraço Jardins, a Brazilian cuisine
              restaurant with beach and countryside influences. The menu signed
              by chef Raul Vieira, values the fresh ingredients from small local
              producers, rescuing the culture and the real flavor of the food.
            </p>

            <div>
              <h1 className="font-bold text-3xl mt-10 border-b pb-5">
                5 photos
              </h1>
              <div className="flex flex-wrap gap-2 mt-6">
                <img
                  src="https://resizer.otstatic.com/v2/photos/xlarge/2/52288036.jpg"
                  alt=""
                  className="w-56 h-44 rounded"
                />
                <img
                  src="https://resizer.otstatic.com/v2/photos/xlarge/1/51500887.jpg"
                  alt=""
                  className="w-56 h-44 rounded"
                />
                <img
                  src="https://resizer.otstatic.com/v2/photos/xlarge/1/51500885.jpg"
                  alt=""
                  className="w-56 h-44 rounded"
                />
                <img
                  src="https://resizer.otstatic.com/v2/photos/xlarge/1/52053868.jpg"
                  alt=""
                  className="w-56 h-44 rounded"
                />
                <img
                  src="https://resizer.otstatic.com/v2/photos/xlarge/1/51651409.jpg"
                  alt=""
                  className="w-56 h-44 rounded"
                />
              </div>
            </div>

            <div className="mt-10">
              <h1 className="font-bold text-3xl border-b mb-7 pb-5">
                What 100 people are saying
              </h1>

              <div>
                <div className="border-b pb-7 mb-7">
                  <div className="flex">
                    <div className="w-1/6 flex flex-col items-center justify-center gap-2">
                      <div className="rounded-full bg-blue-400 w-16 h-16 flex items-center justify-center">
                        <h2 className="text-white text-2xl">SW</h2>
                      </div>
                      <p>Steven Wilson</p>
                    </div>

                    <div className="ml-10 w-5/6">
                      <div className="flex items-center gap-5">
                        <div className="flex">*****</div>
                      </div>
                      <div className="mt-5">
                        <p className="text-lg font-light">
                          Great customer service, kindness and efficiency! Food
                          was delicious and great presentation!
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:w-[27%] w-screen p-10 lg:p-0 lg:relative text-reg text-gray-800">
            <div className="lg:fixed lg:w-[15%] bg-white rounded p-3 shadow flex flex-col">
              <div className=" border-b pb-2 font-bold">
                <h4 className="mr-7 text-lg">Make a reservation!</h4>
              </div>
              <div className="my-3 flex flex-col">
                <label htmlFor="peopleSelection">Party size</label>
                <select
                  name="peopleSelection"
                  id="peopleSelection"
                  className="py-1 border-b font-light bg-white mt-1"
                >
                  <option value="">1 person</option>
                  <option value="">2 people</option>
                  <option value="">3 people</option>
                </select>
              </div>
              <div className="flex justify-between gap-5">
                <div className="flex flex-col lg:w-[48%] ">
                  <label htmlFor="date">Date</label>
                  <input
                    type="text"
                    name="date"
                    id="date"
                    className="py-1 border-b font-light w-24 bg-white"
                  />
                </div>

                <div className="flex flex-col lg:w-[48%] ">
                  <label htmlFor="time">Time</label>
                  <select
                    name="time"
                    id="time"
                    className="py-1.5 border-b font-light w-24 bg-white"
                  >
                    <option value="">12:30 PM</option>
                    <option value="">13:30 PM</option>
                  </select>
                </div>
              </div>
              <div className="mt-5">
                <button className="bg-red-600 rounded w-full px-4 text-white font-bold h-16">
                  Find a Time
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default RestaurantDetails;
