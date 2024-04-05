import { HourglassTop } from "@mui/icons-material";
import { Avatar } from "@mui/material";
import React from "react";

type Props = {
  title: string;
  authorName: string;
  readLength: string;
};

const BlogCard = ({ title, authorName, readLength }: Props) => {
  return (
    <div className="w-full max-w-[800px] flex flex-col gap-3">
      <section className="aspect-[1.6] w-full bg-slate-400 rounded-md"></section>

      <section className="flex flex-col gap-2 px-3 py-1">
        <h1 className="text-lg font-medium xl:text-xl">{title}</h1>

        <div className="flex gap-2">
          <Avatar src="" />
          <div className="flex flex-col gap-1 justify-start">
            <p className="">{authorName}</p>
            <div className="flex gap-1 text-sm text-grey_icon/60 items-center">
              <HourglassTop sx={{ fontSize: 16 }} />
              <p className="">
                {readLength}
                <span className="ml-1">mins read</span>
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BlogCard;
