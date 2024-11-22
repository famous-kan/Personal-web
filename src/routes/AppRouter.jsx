import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "../Layouts/Layout";
import Register from "../pages/auth/Register";
import HomePage from "../pages/HomePage";
import Login from "../pages/auth/Login";
import Shop from "../pages/Shop";
import Checkout from "../pages/Checkout";
import Dashboard from '../pages/admin/Dashboard'
import AdminLayout from "../Layouts/AdminLayout";
import Product from "../pages/admin/Product";
import Manage from "../pages/admin/Manage";
import OrderCustomer from "../pages/admin/OrderCustomer";
import HomeUser from "../pages/user/HomeUser";
import History from "../pages/user/History";
import UserLayout from "../Layouts/UserLayout";
import ProtectRouter from "./ProtectRouter";
import Unauthorization from "../pages/Unauthorization";
import OrderComplete from "../pages/OrderComplete";
import Status from '../pages/user/Status'
import Faq from '../pages/Faq'
import WhyUs from '../pages/WhyUs'
import Homeee from "../pages/Homeee";



const router = createBrowserRouter([

  {path : '/', 
  element: <Layout />,
  children :[
    { index: true, element: <HomePage /> },
    { path: "shop", element: <Shop /> },
    { path: "history", element: <History /> },
    { path: "checkout", element: <Checkout /> },
    { path: "complete", element: <OrderComplete /> },
    { path: "register", element: <Register /> },
    { path: "login", element: <Login /> },
    { path: "faq", element:  <Faq /> },
    { path: "WhyUs", element:  <WhyUs /> },
    {path: "unauthorization", element: <Unauthorization /> },
    {path: "homeee", element: <Homeee /> },

  ]
  },

  {path : '/admin',

    element: < ProtectRouter element={ <AdminLayout />} allow={["ADMIN"]}/>,
    children: [
      {index: true, element: <Dashboard />},
      {path: 'product', element: <Product /> },
      {path: 'order', element: <OrderCustomer /> },
      {path: 'manage', element: <Manage /> },
      {path: 'home', element: <HomePage /> },

    ]
  },

  
  {path : '/user',
    element: <UserLayout /> ,
    children: [
    {index: true, element: <HomeUser /> },
    { path: "history", element: <Status /> },

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
