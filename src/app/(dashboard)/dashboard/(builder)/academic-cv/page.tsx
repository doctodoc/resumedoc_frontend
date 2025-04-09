"use client";
import DashboardLayout from "@/containers/layouts/dashboardLayout/DashboardLayout";
import MyCvsPage from "@/pages/cv/MyCvsPage";
import React from "react";

const page = () => {
  return (
    <DashboardLayout>
      <div className="w-full flex flex-col items-center ">
        <MyCvsPage />
      </div>
    </DashboardLayout>
  );
};

export default page;
