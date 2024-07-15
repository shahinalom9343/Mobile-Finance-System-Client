import { createBrowserRouter } from "react-router-dom";
import AdminHome from "../Dashboard/Admin/AdminHome";
import AgentHome from "../Dashboard/Agent/AgentHome";
import UserHome from "../Dashboard/User/UserHome";
import DashBoard from "../Dashboard/Dashboard";

const router = createBrowserRouter([
  {
    path: "/",
    element: <DashBoard></DashBoard>,
    children: [
      // for users
      {
        index: true,
        element: <UserHome></UserHome>,
      },
      // for agents
      {
        index: true,
        element: <AgentHome></AgentHome>,
      },
      // for admin
      {
        index: true,
        element: <AdminHome></AdminHome>,
      },
    ],
  },
]);
export default router;
