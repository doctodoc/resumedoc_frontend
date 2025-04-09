// import { selectResumeAccentColors } from "@/api/slices/resume/resumeAppearanceConfig/slice";
// import { useAppSelector } from "@/lib/hooks/globalHooks";
// import { Circle } from "@mui/icons-material";
// import React from "react";

// const ColorSetting = () => {
//   const resumeColors = useAppSelector(selectResumeAccentColors);

//   return (
//     <div>
//       <div className="flex gap-[1px]">
//         {resumeColors.map((color, {i}) => {
//           return (
//             <button key={} className="flex justify-center items-center opacity-80 hover:opacity-100 border-[0.11rem] border-transparent hover:border-primary rounded-full ">
//               <Circle
//                 className={`text-4xl m-0 p-0 translate-x-0 translate-y-0`}
//                 sx={{ color: `${color}` }}
//               />
//             </button>
//           );
//         })}
//       </div>
//     </div>
//   );
// };

// export default ColorSetting;
