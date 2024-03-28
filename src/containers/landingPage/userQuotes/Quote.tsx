import QuoteIcon from "@/assets/svg/QuoteIcon";
import { Avatar } from "@mui/material";
import React from "react";

type QuoteProps = {
  title: string;
  comment: string;
  username: string;
  role: string;
  avatar: string;
};

const Quote = ({ title, comment, username, role, avatar }: QuoteProps) => {
  return (
    <div className={"flex flex-col gap-3 md:gap-5"}>
      <section className="flex flex-col items-center gap-2 ">
        <div className={"flex"}>
          <QuoteIcon />
          <div>
            <h3 className="font-semibold text-lg text-center dark:text-dark_primary_text dark:font-medium">{title}</h3>
            <p className="max-w-[500px] font-medium dark:font-normal text-center dark:text-dark_secondary_text">{comment}</p>
          </div>
        </div>
      </section>
      <section className="w-full flex justify-center">
        <div className="flex gap-2 max-w-[500px]">
          {/* Avatar */}
          <Avatar src={avatar} />
          {/* <Avatar src={avatar}/> */}
          <div className="flex flex-col gap-1 text-sm">
            <p className="font-semibold dark:font-normal dark:text-dark_primary_text">{username}</p>
            <p className="dark:text-dark_secondary_text">{role}</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Quote;
