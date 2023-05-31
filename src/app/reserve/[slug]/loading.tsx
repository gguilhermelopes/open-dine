import SummaryForm from "./components/SummaryForm";

const Loading = () => {
  return (
    <div className="border-t text-gray-800">
      <div className="py-9 px-5 w-[80%] md:w-3/5 m-auto mt-10 animate-pulse bg-slate-200 h-[100px]"></div>
      <div className="py-9 px-5 w-[80%] md:w-3/5 m-auto mt-5 animate-pulse bg-slate-200 h-[300px]"></div>
    </div>
  );
};

export default Loading;
