import React from "react";
import CoverLetterCard from "./CoverLetterCard";
import { Add } from "@mui/icons-material";
import { lightCardBg } from "@/assets/css/tailwindcss";
import CurvedButton from "@/components/buttons/CurvedButton";

const CoverLetter = () => {
  return (
    <div className="flex flex-col gap-4 w-full bg-inherit">
      <h1 className="font-medium">Cover Letter</h1>

      <main className="flex gap-3">
        <CoverLetterCard />
        <CoverLetterCard />
        <CoverLetterCard />
        <CoverLetterCard />
        <CurvedButton className={`text-primary ${lightCardBg}`}>
          <p>New Cover Letter</p>
          <Add sx={{fontSize: 50}}/>
        </CurvedButton>
      </main>
    </div>
  );
};

export default CoverLetter;
