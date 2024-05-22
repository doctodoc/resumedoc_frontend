"use client";

import React from "react";
import PainPointArea from "./PainPointArea";
import Banner from "./Banner";
import ResumeSamples from "./resumeSamples/ResumeSamples";
import Features from "./features/Features";
import UsersQuotes from "./userQuotes/UsersQuotes";
import BottomCTA from "./BottomCTA";
import { universalPaddingY } from "@/assets/css/tailwindcss";
import classNames from "classnames";

const LandingPage = () => {
  return (
    <div className={classNames(`${universalPaddingY}`)}>
      <header>
        <Banner />
        <section></section>
      </header>

      <main
        className={classNames(
          `flex flex-col gap-16 xl:gap-20 mt-[4rem] sm:mt-[5rem] md:mt-[8rem] `
        )}
      >
        <PainPointArea />
        <ResumeSamples />
        <Features />
        <UsersQuotes />
        <BottomCTA />
      </main>
    </div>
  );
};

export default LandingPage;
