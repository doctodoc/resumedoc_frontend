"use client";
import MyResumes from "@/containers/resume/myResumes/MyResumes";
import React from "react";

const page = () => {
  return (
    <div className="w-full flex justify-center">
      <main className="max-w-[1000px] w-full flex flex-col justify-center py-7 gap-10">
        <section>
          <button>All</button>
          <button>My Resumes</button>
          <button>Saved Entries</button>
        </section>
        <MyResumes />
      </main>
    </div>
  );
};

export default page;
