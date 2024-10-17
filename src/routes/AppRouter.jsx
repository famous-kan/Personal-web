import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "../Layouts/Layout";
import Register from "../pages/auth/Register";
import HomePage from "../pages/HomePage";
import Login from "../pages/auth/Login";
import Shop from "../pages/Shop";
import Cart from "../pages/Cart";
import History from "../pages/History";
import Checkout from "../pages/Checkout";
import Dashboard from '../pages/admin/Dashboard'
import AdminLayout from "../Layouts/AdminLayout";
import Product from "../pages/admin/Product";
import Manage from "../pages/admin/Manage";
import HomeUser from "../pages/user/HomeUser";
import UserLayout from "../Layouts/UserLayout";
import ProtectRouter from "./ProtectRouter";
import Unauthorization from "../pages/Unauthorization";
import OrderComplete from "../pages/OrderComplete";

const router = createBrowserRouter([

  {path : '/', 
  element: <Layout />,
  children :[
    { index: true, element: <HomePage /> },
    { path: "shop", element: <Shop /> },
    { path: "cart", element: <Cart /> },
    { path: "history", element: <History /> },
    { path: "checkout", element: <Checkout /> },
    { path: "register", element: <Register /> },
    { path: "login", element: <Login /> },
    { path: "complete", element: <OrderComplete /> },
  
    {path: "unauthorization", element: <Unauthorization /> },
  ]
  },


  {path : '/admin',

    element: < ProtectRouter element={ <AdminLayout />} allow={["ADMIN"]}/>,
    children: [
      {index: true, element: <Dashboard />},
      {path: 'product', element: <Product /> },
      {path: 'manage', element: <Manage /> },
      {path: 'home', element: <HomePage /> },

    ]
  },
  {path : '/user',
    element: <UserLayout /> ,
    children: [
    {index: true, element: <HomeUser /> },
    { path: "shop", element: <Shop /> },
    { path: "cart", element: <Cart /> },
    { path: "history", element: <History /> },
    { path: "checkout", element: <Checkout /> },
    { path: "register", element: <Register /> },
    { path: "login", element: <Login /> },

    ]
  },

]);


export default function AppRouter() {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}
