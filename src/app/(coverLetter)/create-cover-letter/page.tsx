import { universalPaddingY } from "@/assets/css/tailwindcss";
import CreateCoverLetter from "@/containers/coverLetter/createCoverLetter/CreateCoverLetter";
import React from "react";

const page = () => {
  return (
    <div>
      <main className={`${universalPaddingY}`}>
        <CreateCoverLetter />
      </main>
    </div>
  );
};

export default page;
