import { secTextColor } from "@/assets/css/tailwindcss";
import React, { ReactNode } from "react";

type Props = {
  children: ReactNode | Array<ReactNode> | string;
  title: string;
};

const Layout = ({ children, title }: Props) => {
  return (
    <div className="flex flex-col gap-4 w-full items-center">
      <main className="flex flex-col gap-4 w-full bg-inherit max-w-[1000px]">
        {/* <h1 className="font-medium">Created Resumes & Saved Entries</h1> */}

        <div className="flex h-fit bg-inherit w-full ">
          <div className="flex flex-col gap-4 w-full bg-inherit">
            <h1 className={`font-semibold xl:text-lg ${secTextColor}`}>
              {title}
            </h1>

            <section className="grid grid-cols-4 gap-3 xl:gap-5 flex-wrap w-full ">
              {children}
            </section>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Layout;
