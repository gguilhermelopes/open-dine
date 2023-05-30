const Loading = () => {
  return (
    <>
      <main>
        <div className="h-36 lg:h-96 overflow-hidden animate-pulse bg-slate-200 ">
          <div className={`bg-center h-full`} />
        </div>
        <div className="flex flex-col lg:flex-row m-auto w-full lg:w-2/3 lg:justify-between items-start mt-10 lg:-mt-11">
          <div className="bg-white w-full rounded p-3 shadow">
            <nav className="flex text-reg border-b pb-2">
              <h4 className="mr-7">Overview</h4>
              <p className="mr-7">Menu</p>
            </nav>

            <div className="mt-4 border-b pb-6 animate-pulse bg-slate-200 w-[275px]lg:w-[400px] h-16 rounded"></div>

            <div className="flex items-end animate-pulse">
              <div className="ratings mt-2 flex items-center">
                <div className="flex items-center bg-slate-200 w-56"></div>
                <p className="text-reg ml-3"></p>
              </div>
              <div>
                <p className="text-reg ml-4"> </p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Loading;
