"use client";
import { pryBgColor, universalPaddingX } from "@/assets/css/tailwindcss";
import SideNav from "@/containers/navbar/sideNav/SideNav";
import React from "react";

export default function LayoutStructure({
  children,
  handleNav,
  activeTab,
}: Readonly<{
  children: React.ReactNode;
  handleNav?: (P: string) => void;
  activeTab?: string;
}>) {
  return (
    <div
      className={`flex gap-2 xl:gap-4 h-screen w-full inset-0 ${pryBgColor}`}
    >
      <div className=" h-full w-fit max-w-[300px] p-3">
        <div className="h-fit">
          <SideNav collapsed page={"build"} handleNav={handleNav} activeTab={activeTab}/>
        </div>
      </div>
      <div
        className={`pb-6 md:pb-6 overflow-auto w-full flex-1 flex flex-col `}
      >
        <main className="flex-1 ">{children}</main>
      </div>
      
    </div>
  );
}
