"use client";
import DashboardLayout from "@/containers/layouts/dashboardLayout/DashboardLayout";
import MyStatementOfPurposePage from "@/pages/statement-of-purpose/MyStatementOfPurposePage";
import React from "react";

const page = () => {
  return (
    <div>
      <DashboardLayout><MyStatementOfPurposePage /></DashboardLayout>
      
    </div>
  );
};

export default page;
