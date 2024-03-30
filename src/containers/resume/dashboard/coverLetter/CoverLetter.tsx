import React from "react";

const CoverLetter = () => {
  return (
    <div className="flex flex-col gap-4 w-full bg-inherit">
      <h1 className="font-medium">Cover Letter</h1>

      <main className="">
        <div className="flex flex-col gap-4">
          <section className="">
            <p>Software Engineering</p>
            <p>
              {" "}
              <span className="text-secondary_text dark:text-dark_secondary_text">
                @
              </span>
              Meta
            </p>
          </section>

          <section className="">
            <div className="text-sm text-secondary_text dark:text-dark_secondary_text">
              <p>Aug 7, 2024</p>
              <p>12:30:45</p>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
};

export default CoverLetter;
