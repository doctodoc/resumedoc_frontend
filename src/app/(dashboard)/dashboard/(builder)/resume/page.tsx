"use client";

import DashboardLayout from "@/containers/layouts/dashboardLayout/DashboardLayout";
import MyResumesPage from "@/pages/resume/saved-resumes/MyResumesPage";
import React from "react";

const page = () => {
  return (
    <DashboardLayout>
      <div className="w-full flex flex-col items-center ">
        <MyResumesPage />
      </div>
    </DashboardLayout>
  );
};

export default page;
