import Header from "./components/Header";

const Loading = () => {
  const numArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];
  return (
    <>
      <Header />
      <main>
        <div className="py-3 px-3 gap-4 lg:px-36 mt-5 sm:mt-10 flex flex-wrap justify-center">
          {numArray.map((item) => (
            <div
              key={item}
              className="animate-pulse bg-slate-200 w-64 h-72 rounded overflow-hidden border cursor-pointer"
            ></div>
          ))}
        </div>
      </main>
    </>
  );
};

export default Loading;
