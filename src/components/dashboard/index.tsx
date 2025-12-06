import React from "react";
import Sidebar from "./Sidebar";
import { Outlet } from "react-router";

export const DashboardPage = () => {
  return (
    <div className="flex w-screen min-h-screen ">
      <div className="flex-[20%]  ">
        <Sidebar />
      </div>
      <div className="flex-[80%] bg-violet-50">
        <Outlet />
      </div>
    </div>
  );
};
