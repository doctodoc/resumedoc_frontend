import { universalPaddingX, universalPaddingY } from "@/assets/css/tailwindcss";
import AllBlog from "@/containers/blog/all/AllBlog";
import BlogHome from "@/containers/blog/home/BlogHome";
import React from "react";

const BlogHomePage = () => {
  return (
    <div
      className={`w-full flex justify-center ${universalPaddingX} ${universalPaddingY}`}
    >
      <main className="w-full max-w-[1400px]">
        <BlogHome />
      </main>
    </div>
  );
};

export default BlogHomePage;
