import { Outlet } from "react-router-dom";

const DashBoard = () => {
  return (
    <div>
      <title>PickTask Rush | Dashboard</title>

      <div className="grid grid-cols-3 md:grid-cols-7 gap-1 md:gap-8 bg-pink-500 py-2">
        <div className="col-span-1 md:col-span-2 text-white text-lg md:text-2xl font-medium flex justify-center items-center">
          <div className="font-bold">Spider MFS</div>
        </div>
        <div className="col-span-1 md:col-span-4 md:px-4 text-white">
          <div className="flex flex-col md:flex-row gap-2 justify-around items-center">
            <div>
              <button className="btn">
                Available Coin
                <div className="badge badge-primary">1200</div>
              </button>
            </div>
          </div>
        </div>
        <details className="col-span-1 w-auto dropdown"></details>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-7 gap-8">
        <div className="col-span-1 md:col-span-2 bg-sky-500  min-h-screen text-white">
          <div className="divider">OR</div>
        </div>
        <div className="col-span-1 md:col-span-5">
          <Outlet></Outlet>
        </div>
      </div>
    </div>
  );
};

export default DashBoard;
