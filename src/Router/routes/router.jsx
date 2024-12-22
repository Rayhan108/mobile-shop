import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import ErrorPage from "../../Page/ErrorPage/ErrorPage";
import Home from "../../Page/Home/Home/Home";
import Login from "../../Page/Login/Login";
import SignUp from "../../Page/SignUp/SignUp";
import DashboardLayout from "../../Layout/DashboardLayout";
import PrivetRoute from "../PrivetRoutes/PrivetRoute";

import AdminRoutes from "../AdminRoutes/AdminRoutes";
import ManageUsers from "../../Page/Dashboard/Admin/ManageUser/ManageUser";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      errorElement: <ErrorPage></ErrorPage>,
      children: [
        {
          path: "/",
          element: <Home></Home>,
        },
        {
          path: "/login",
          element: <Login></Login>,
        },
        {
          path: "/signUp",
          element:<SignUp/>,
        },
       
      ],
    },
    {
      path: "dashboard",
      element: (
        <PrivetRoute>
          <DashboardLayout/>
        </PrivetRoute>
      ),
      errorElement: <ErrorPage></ErrorPage>,
      children: [
        {
          path: "manageUser",
          element: <ManageUsers/>
          // <AdminRoutes>
          //   </AdminRoutes>
        },
       
      ],
    },
  ]);
  export default router;
  