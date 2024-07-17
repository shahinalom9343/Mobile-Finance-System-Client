import { createBrowserRouter } from "react-router-dom";
import AdminHome from "../Dashboard/Admin/AdminHome";
import AgentHome from "../Dashboard/Agent/AgentHome";
import UserHome from "../Dashboard/User/UserHome";
import DashBoard from "../Dashboard/Dashboard";
import Register from "../Pages/Register";
import Login from "../Pages/Login";
import Common from "../Dashboard/Common";
import UserManagement from "../Dashboard/Admin/UserManagement";
import SystemMonitoring from "../Dashboard/Admin/SystemMonitoring";
import TransactionManagement from "../Dashboard/Agent/TransactionManagement";
import BalanceInquery from "../Dashboard/Agent/BalanceInquery";
import CashOut from "../Dashboard/User/CashOut";
import CashIn from "../Dashboard/User/CashIn";
import SendMoney from "../Dashboard/User/SendMoney";
import BalanceHistory from "../Dashboard/User/BalanceHistory";

const router = createBrowserRouter([
  {
    path: "/",
    element: <DashBoard></DashBoard>,
    children: [
      {
        index: true,
        element: <Common></Common>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      // for users

      {
        path: "/userHome",
        element: <UserHome></UserHome>,
      },
      {
        path: "/cashIn",
        element: <CashIn></CashIn>,
      },
      {
        path: "/cashOut",
        element: <CashOut></CashOut>,
      },
      {
        path: "/sendMoney",
        element: <SendMoney></SendMoney>,
      },
      {
        path: "/history",
        element: <BalanceHistory></BalanceHistory>,
      },
      // for agents
      {
        path: "/agentHome",
        element: <AgentHome></AgentHome>,
      },
      {
        path: "/transactionManagement",
        element: <TransactionManagement></TransactionManagement>,
      },
      {
        path: "/balanceInquery",
        element: <BalanceInquery></BalanceInquery>,
      },
      // for admin

      {
        path: "/adminHome",
        element: <AdminHome></AdminHome>,
      },
      {
        path: "/userManagement",
        element: <UserManagement></UserManagement>,
      },
      {
        path: "/systemMonitoring",
        element: <SystemMonitoring></SystemMonitoring>,
      },
    ],
  },
]);
export default router;
