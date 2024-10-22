import React from "react";
import { Outlet } from "react-router-dom";
import MainNav from "../components/MainNav";
import SidebarUser from "../components/User/SidebarUser";

const UserLayout = () => {
  return (
    <div className="bg-slate-300 min-h-screen">
      <MainNav />

      <div className="flex flex-col">
        <main className="p-6 bg-slate-300 overflow-y-auto h-full">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default UserLayout;
