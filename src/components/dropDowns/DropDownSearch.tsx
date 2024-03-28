import React from "react";
import InputField from "../inputs/InputField";
import { ArrowDropDown } from "@mui/icons-material";

const DropDownSearch = () => {
  return (
    <div>
      <InputField
        placeholder="Select Industry or Job Title"
        id={"select_industry_or_title"}
        value={""}
        className="rounded-lg"
        icon={ArrowDropDown}
        iconPosition="right"
        handleChange={() => {}}
      />
        <section>
            
        </section>
    </div>
  );
};

export default DropDownSearch;
