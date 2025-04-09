import { selectResumeForm } from "@/api/slices/resume/resumeFormData/slice";
import { secTextColor } from "@/assets/css/tailwindcss";
import { useAppSelector } from "@/lib/hooks/globalHooks";
import { ResumeFormCompType } from "@/shared/types/componentTypes";
import { resumeAliases } from "@/utils/helperData/resume";
import { transformResumeDataForReview } from "@/utils/helperFunctions/transformOps";
import React, { useEffect, useState } from "react";

const ReviewSection = () => {
  const formData = useAppSelector(selectResumeForm);
  const [resumeData, setResumeData] = useState<ResumeFormCompType | null>(null)
//   const transformedFormData = useState(null);

  useEffect(() => {
    // console.log(transformResumeDataForReview(formData))
    setResumeData(formData)
  }, [formData]);
  
  return (
    <div>
      {resumeData && Object.keys(resumeData).map((data: any, index) => {
        const section: keyof ResumeFormCompType = data;
        type FieldValue = typeof resumeData[typeof section]
        const fieldValue:FieldValue  = resumeData[`${section}`];
        return (
          <div className="flex flex-col gap-2" key={`${index}`}>
            <p>{resumeAliases[`${section}`]}</p>
            <div className={`ml-4  font-light`}>
              <p>
                {/* {fieldValue &&
                  Object.keys(fieldValue)?.map((val) => {
                    // const val:any = value 
                    return (
                      <div className="flex gap-4">
                        <p>{resumeAliases[`${val}`]}</p>
                        {
                          <div className={`${secTextColor}`}>{`${
                            fieldValue[`${val}`]?.value
                              ? Array.isArray(fieldValue[`${val}`]?.value) ? fieldValue[`${val}`]?.value?.map(item=>{
                                return(
                                    Object.keys(item).map(innerItem=>{
                                        console.log(item[`${innerItem}`].value)
                                        return(
                                        <p>{item[`${innerItem}`].value}</p>
                                    )})
                                )
                              }): fieldValue[`${val}`]?.value
                              : "Not filled"
                          } `}</div>
                        }
                      </div>
                    );
                  })} */}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ReviewSection;
