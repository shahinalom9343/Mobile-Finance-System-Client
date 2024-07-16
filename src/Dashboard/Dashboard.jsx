import {
  FaAssistiveListeningSystems,
  FaBalanceScale,
  FaBalanceScaleRight,
  FaCashRegister,
  FaHome,
  FaMoneyBill,
  FaUsers,
} from "react-icons/fa";
import { FaMoneyBillTransfer } from "react-icons/fa6";
import { PiHandWithdrawFill } from "react-icons/pi";
import { Link, Outlet } from "react-router-dom";

const DashBoard = () => {
  let role = "user";
  return (
    <div>
      <title>PickTask Rush | Dashboard</title>

      <div className="grid grid-cols-3 md:grid-cols-7 gap-1 md:gap-8 bg-pink-500 py-2">
        <div className="col-span-1 md:col-span-2 text-white text-lg md:text-2xl font-medium flex justify-center items-center">
          <div className="font-bold">Spider MFS</div>
        </div>
        <div className="col-span-1 md:col-span-4 md:px-4 text-white">
          <div className="flex flex-col md:flex-row gap-2 justify-around items-center">
            <div className="flex gap-3">
              <Link to="/login" className="btn btn-primary">
                Login
              </Link>
              <Link to="/register" className="btn btn-success">
                Register
              </Link>
            </div>
          </div>
        </div>
        <details className="col-span-1 w-auto dropdown"></details>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-7 gap-8">
        <div className="col-span-1 md:col-span-2 bg-sky-500  min-h-screen text-white">
          <ul className="menu p-5 font-medium text-lg">
            {role === "admin" && (
              <>
                <li>
                  <Link to="/adminHome">
                    <FaHome></FaHome>
                    Admin Home
                  </Link>
                </li>
                <li>
                  <Link to="/userManagement">
                    <FaUsers></FaUsers>
                    User Management
                  </Link>
                </li>
                <li>
                  <Link to="/systemMonitoring">
                    <FaAssistiveListeningSystems></FaAssistiveListeningSystems>
                    System Monitoring
                  </Link>
                </li>
              </>
            )}
            {role === "agent" && (
              <>
                <li>
                  <Link to="/agentHome">
                    <FaHome></FaHome>
                    Agent Home
                  </Link>
                </li>
                <li>
                  <Link to="/transactionManagement">
                    <FaMoneyBillTransfer></FaMoneyBillTransfer>
                    Transaction Management
                  </Link>
                </li>
                <li>
                  <Link to="/balanceInquery">
                    <FaBalanceScale></FaBalanceScale>
                    Balance Inquery
                  </Link>
                </li>
              </>
            )}
            {role === "user" && (
              <>
                <li>
                  <Link to="/userHome">
                    <FaHome></FaHome>
                    User Home
                  </Link>
                </li>
                <li>
                  <Link to="/sendMoney">
                    <FaMoneyBill></FaMoneyBill>
                    Send Money
                  </Link>
                </li>
                <li>
                  <Link to="/cashIn">
                    <FaCashRegister></FaCashRegister>
                    Cash In
                  </Link>
                </li>
                <li>
                  <Link to="/cashOut">
                    <PiHandWithdrawFill />
                    Cash Out
                  </Link>
                </li>
                <li>
                  <Link to="/balanceHistory">
                    <FaBalanceScaleRight />
                    Balance History
                  </Link>
                </li>
              </>
            )}
          </ul>
        </div>
        <div className="col-span-1 md:col-span-5">
          <Outlet></Outlet>
        </div>
      </div>
    </div>
  );
};

export default DashBoard;
