const SummaryForm = () => {
  return (
    <form className="mt-10 flex flex-wrap gap-4 justify-between w-[660px] ">
      <input
        type="text"
        className="border rounded p-3 w-80 bg-white"
        placeholder="First name"
      />
      <input
        type="text"
        className="border rounded p-3 w-80 bg-white"
        placeholder="Last name"
      />
      <input
        type="text"
        className="border rounded p-3 w-80 bg-white"
        placeholder="Phone number"
      />
      <input
        type="text"
        className="border rounded p-3 w-80 bg-white"
        placeholder="Email"
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
        By clicking “Complete reservation” you agree to the OpenTable Terms of
        Use and Privacy Policy. Standard text message rates may apply. You may
        opt out of receiving text messages at any time.
      </p>
    </form>
  );
};

export default SummaryForm;
