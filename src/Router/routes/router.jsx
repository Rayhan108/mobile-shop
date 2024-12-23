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
import UpdateProduct from "../../Page/Dashboard/Seller/updateProduct";
import About from "../../Page/About/About";
import ContactPage from "../../Page/Contact/ContactPage";
import ProductDetails from "../../Page/ProductDetails/ProductDetails";
import MyCart from "../../Page/MyCart/MyCart";
import WishList from "../../Page/WishList/WishList";

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
        path: "/products",
        element: <Products />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <ContactPage />,
      },
      {
        path: "/single-product/:id",
        element: (
          <PrivetRoute>
            <ProductDetails />
          </PrivetRoute>
        ),
        loader: ({ params }) =>
          fetch(
            `https://mobile-shop-server-weld.vercel.app/single-product/${params.id}`
          ),
      },
      {
        path: "/cart",
        element: (
          <PrivetRoute>
            <MyCart />
          </PrivetRoute>
        ),
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
        path: "wishList",
        element: <WishList />,
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
        path: "myProducts",
        element: (
          <SellerRoutes>
            <AllProducts />
          </SellerRoutes>
        ),
      },
      {
        path: "updateProduct/:id",
        element: (
          <SellerRoutes>
            <UpdateProduct />
          </SellerRoutes>
        ),
      },
    ],
  },
]);
export default router;
