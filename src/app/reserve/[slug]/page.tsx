import NavBar from "@/app/components/NavBar";
import Link from "next/link";

const Reservation = () => {
  return (
    <div className="min-h-screen w-screen bg-gray-100">
      <header className="max-w-screen-2xl m-auto bg-white">
        <NavBar />
        <section className="border-t h-screen text-gray-800">
          <div className="py-9 w-3/5 m-auto">
            <div>
              <h3>You're almost done!</h3>
              <div className="flex mt-5 gap-4">
                <img
                  src="https://resizer.otstatic.com/v2/photos/legacy/3/46883778.jpg"
                  alt=""
                  className="w-32 h-18 rounded"
                />
                <div>
                  <h1 className="text-3xl font-bold">The Waverley - Elgin</h1>
                  <div className="flex mt-3 gap-6">
                    <p>Tuesday, May 9 2023</p>
                    <p>7:30PM</p>
                    <p>3 people</p>
                  </div>
                </div>
              </div>
            </div>
            <form className="mt-10 flex flex-wrap gap-4 justify-between w-[660px] ">
              <input
                type="text"
                className="border rounded p-3 w-80 bg-white"
                placeholder="First name *"
              />
              <input
                type="text"
                className="border rounded p-3 w-80 bg-white"
                placeholder="Last name *"
              />
              <input
                type="text"
                className="border rounded p-3 w-80 bg-white"
                placeholder="Phone number *"
              />
              <input
                type="text"
                className="border rounded p-3 w-80 bg-white"
                placeholder="Email *"
              />
              <select
                name="occasion"
                id="occasion"
                className="border rounded p-3 w-80 bg-white text-gray-400"
                placeholder="Select an occasion (optional)"
              >
                <option disabled selected>
                  Select an occasion (optional)
                </option>
                <option value="">Birthday</option>
                <option value="">Anniversary</option>
                <option value="">Date Night</option>
                <option value="">Business Meal</option>
              </select>
              <input
                type="text"
                className="border rounded p-3 w-80 bg-white"
                placeholder="Requests (optional)"
              />
              <button className="bg-red-600 w-full p-3 text-white font-bold rounded disabled:bg-gray-300">
                Complete reservation
              </button>
              <p className="text-sm">
                By clicking “Complete reservation” you agree to the OpenTable
                Terms of Use and Privacy Policy. Standard text message rates may
                apply. You may opt out of receiving text messages at any time.
              </p>
            </form>
          </div>
        </section>
      </header>
    </div>
  );
};

export default Reservation;
