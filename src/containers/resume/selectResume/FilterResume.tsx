import { pryTextColor } from "@/assets/css/tailwindcss";
import CurvedButton from "@/components/buttons/CurvedButton";
import RoundedButton from "@/components/buttons/RoundedButton";
import InputField from "@/components/inputs/InputField";
import InputRadio from "@/components/inputs/InputRadio";
import Title from "@/components/texts/Title";
import { ResumeFilterQueryType } from "@/shared/types/resumeTypes";
import { ArrowDropDown } from "@mui/icons-material";
import React, { useCallback, useState } from "react";

type Props = {
  applyResumeFilterQuery: (filterData: ResumeFilterQueryType) => void;
};

export const initialResumeQueryData = {
  resumeCategory: null,
  pageSize: 1,
  atsFriendly: true,
};

const FilterResume = ({ applyResumeFilterQuery }: Props) => {
  const [filterData, setFilterData] = useState<ResumeFilterQueryType>(
    initialResumeQueryData
  );

  const applyFilters = useCallback(() => {
    applyResumeFilterQuery(filterData);
  }, [filterData]);

  const handleFilter = () => {
    // setFilterData()
  };

  const handlePageSize = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFilterData({ ...filterData, [e.target.name]: e.target.value });
  };

  const handleResumeType = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value;
    setFilterData({ ...filterData, [e.target.name]: val ? true : false });
  };

  return (
    <section
      className={`hidden md:flex flex-col md:max-w-[300px] xl:max-w-[400px] min-h-[200px] h-fit max-h-[550px] bg-light_gray_widget dark:bg-secondary_dark flex-1  py-3 dark:border-r-[0.8px] dark:border-y-[0.8px] dark:border-light_gray_widget/15 `}
    >
      <Title className="dark:text-dark_primary_text text-base text-center font-semibold w-full mb-5">
        Filter Resume Templates
      </Title>
      <div className="px-3 overflow-y-auto">
        <form className="flex flex-col gap-4">
          {/* Industry or Position */}
          <div>
            <Title isSub>Job Title</Title>
            <div className="ml-4">
              <InputField
                placeholder="Select Industry or Job Title"
                id={"select_industry_or_title"}
                value={""}
                className="rounded-lg"
                icon={ArrowDropDown}
                iconPosition="right"
                handleChange={() => {}}
              />
            </div>
          </div>

          {/* Company */}
          <div>
            <Title isSub>Company</Title>
            <div className="ml-4">
              <InputField
                placeholder="Select Company"
                id={"select_company"}
                value={""}
                className="rounded-lg"
                icon={ArrowDropDown}
                iconPosition="right"
                handleChange={() => {}}
              />
            </div>
          </div>

          {/* Number of Page */}
          <div className="flex flex-col gap-2">
            <Title isSub>Resume Size</Title>
            <div className="ml-4 flex flex-col gap-1">
              <InputRadio
                value={1}
                name={"pageSize"}
                id={"one_page"}
                onChange={handlePageSize}
                label={"One Page"}
                defaultChecked
              />
              <InputRadio
                value={2}
                name={"pageSize"}
                id={"two_pages"}
                onChange={handlePageSize}
                label={"Two pages"}
              />
            </div>
          </div>

          {/* ATS Friendly */}
          <div className="flex flex-col gap-2">
            <Title isSub>ATS Friendly</Title>
            <div className="ml-4 flex flex-col gap-1">
              <InputRadio
                value={0}
                name={"atsFriendly"}
                id={"all_resumes"}
                onChange={handleResumeType}
                label={" All Resume Types"}
                defaultChecked
              />
              <InputRadio
                value={1}
                name={"atsFriendly"}
                id={"ats_friendly"}
                onChange={handleResumeType}
                label={" ATS Friendly only"}
              />
            </div>
          </div>
        </form>
      </div>
      <div className="w-full sticky bottom-0 flex justify-center mt-4 bg-transparent z-10">
        <RoundedButton
          className="bg-primary text-white font-semibold w-[90%] max-w-[200px] "
          onClick={applyFilters}
          py={"2"}
        >
          Apply filters
        </RoundedButton>
      </div>
    </section>
  );
};

export default FilterResume;
