"use client";

import { universalPaddingX } from "@/assets/css/tailwindcss";
import CurvedButton from "@/components/buttons/CurvedButton";
import InputField from "@/components/inputs/InputField";
import { footerLinksData } from "@/data/landingPageData/footerData";
import React, { useState } from "react";
import FooterLinks from "./FooterLinks";
import NewsLetterIcon from "@/assets/svg/NewsLetterIcon";

const Footer = () => {
  const [newsLetterEmail, setNewsLetterEmail] = useState<string>("");

  const handleNewsLetterEmail = () => {};
  return (
    <div
      className={`bg-footer_bg dark:bg-secondary_dark  ${universalPaddingX} pt-3 md:pt-10  pb-4 bottom-0 mt-20`}
    >
      <main className="flex flex-col sm:flex-row gap-6">
        <section className="sm:w-[40%]">
          {/* logo */}
          <form className="flex flex-col">
            <div className="flex gap-2 items-center">
              <h3 className="font-medium dark:text-dark_primary_text">
                Subscribe to our Newsletter
              </h3>
              <div className="w-5 h-5">
                <NewsLetterIcon />
              </div>
            </div>
            <div className="flex flex-col gap-3">
              <InputField
                name="newsletter_email"
                type="email"
                id="newsletter_email"
                value={newsLetterEmail}
                className="py-2 px-3"
                containerClass="w-full max-w-[400px]"
                placeholder="Email Address"
                handleChange={handleNewsLetterEmail}
              />
              <CurvedButton
                className="bg-primary text-white w-fit"
                py={2}
                px={4}
              >
                Subscribe
              </CurvedButton>
            </div>

            <div>{/* socials */}</div>
          </form>
        </section>
        <section className="flex flex-wrap gap-4 justify-between flex-1 max-w-[600px]">
          {footerLinksData.map(({ category, links }) => (
            <FooterLinks category={category} links={links} key={category} />
          ))}
        </section>
      </main>
      <div className="mt-4 md:mt-6 xl:mt-10">
        <p
          className={
            "text-sm text-copyright_color dark:text-dark_secondary_text/40 text-center"
          }
        >
          {"Copyright © 2024 All rights reserved ResumeDoc"}
        </p>
      </div>
    </div>
  );
};

export default Footer;
