import React from "react";
import Quote from "./Quote";
import { userQuotesData } from "@/data/landingPageData/usersQuotesData";
import { universalPaddingX } from "@/assets/css/tailwindcss";

type UserQuotesProps = {};

const UsersQuotes = ({}: UserQuotesProps) => {
  return (
    <div className={`flex flex-col gap-4 ${universalPaddingX}`}>
      <h2 className="font-semibold text-xl md:text-2xl text-center text-title_grey dark:text-dark_primary_text/80">
        What Users Say About ResumeDoc
      </h2>

      <section>
        {userQuotesData.map(({ title, username, comment, avatar, role }) => (
          <Quote
            title={title}
            username={username}
            comment={comment}
            avatar={avatar}
            role={role}
          />
        ))}
      </section>
    </div>
  );
};

export default UsersQuotes;
