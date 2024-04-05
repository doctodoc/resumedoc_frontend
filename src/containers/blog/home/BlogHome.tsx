import React from "react";
import BlogCard from "../blogCard/BlogCard";
import { KeyboardArrowDown } from "@mui/icons-material";

const BlogHome = () => {
  return (
    <div className="flex flex-col gap-8">
      <section className="w-full flex gap-3 md:gap-7 xl:gap-10">
        <main className="flex-1">
          <div className="w-full bg-slate-500 aspect-[1.4] rounded-md">
            {/* banner */}
          </div>
        </main>
        <aside className="w-[30%] flex flex-col gap-3">
          <h3 className="text-lg font-medium">Related Articles</h3>
          <BlogCard
            title={"How to optimize your resume"}
            authorName="Mazi One"
            readLength="12"
          />
          <BlogCard
            title={"How to optimize your resume"}
            authorName="Mazi One"
            readLength="12"
          />
        </aside>
      </section>

      <section className={"mt-10 xl:mt-20 flex flex-col gap-4 w-full"}>
        <h2 className="text-lg font-medium">More Articles</h2>

        <div className="w-full flex flex-col items-start px-4">
          <div className="w-full grid grid-cols-2 md:grid-cols-3 gap-5">
            {Array(12)
              .fill(0)
              .map(() => (
                <BlogCard
                  title={"How to optimize your resume"}
                  authorName="Mazi One"
                  readLength="12"
                />
              ))}
          </div>

          <div className={"w-full flex flex-col items-center"}>
            <button className="text-primary flex gap-2 items-center mt-9">
              <p className="text-lg">Load More</p>
              <KeyboardArrowDown sx={{ fontSize: 30 }} />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BlogHome;
