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
import AddProduct from "../../Page/Dashboard/Seller/AddProduct";
import SellerRoutes from "../SellerRoutes/SellerRoutes";
import AllProducts from "../../Page/Dashboard/Seller/AllProducts";
import Products from "../../Page/Products/Products";

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
        element: <SignUp />,
      },
      {
        path: "/allProducts",
        element: <Products />,
      },
    ],
  },
  {
    path: "dashboard",
    element: (
      <PrivetRoute>
        <DashboardLayout />
      </PrivetRoute>
    ),
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "manageUser",
        element: (
          <AdminRoutes>
            <ManageUsers />
          </AdminRoutes>
        ),
      },
      {
        path: "addProduct",
        element: (
          <SellerRoutes>
            <AddProduct />
          </SellerRoutes>
        ),
      },
      {
        path: "allProducts",
        element: (
          <SellerRoutes>
            <AllProducts />
          </SellerRoutes>
        ),
      },
    ],
  },
]);
export default router;
