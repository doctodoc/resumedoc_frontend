// import { ChangeEventHandler, useState } from "react";
// import { getCountries, getCountryCallingCode } from "react-phone-number-input";
// import Input from "react-phone-number-input/input";
// import en from "react-phone-number-input/locale/en";
// import CustomTextField from "./CustomTextField";

import CustomTextField from "./CustomTextField"

// type PhoneInputProps = {
//   // labels: any;
//   onChange: ({ name, value }: { name: string; value: any }) => void;
//   phoneData: { country: string; phoneNumber: string };
// };

// const PhoneInput = ({ onChange, phoneData }: PhoneInputProps) => {
//   const { country, phoneNumber } = phoneData;

//   // const [value, setValue] = useState({country:"", phoneNumber: ""})

//   const handleChange = (e: any) => {
//     const { name, value } = e.target;

//     onChange({ name, value });
//     // setValue((prev)=>({[`${name}`]:value}))
//   };
//   return (
//     <div className={"flex gap-3"}>
//       <CountrySelect
//         onChange={handleChange}
//         value={country}
//         name={"country"}
//         labels={en}
//       />
//       <CustomPhoneInput
//         value={phoneNumber}
//         onChange={handleChange}
//         customInput={CustomTextField}
//         name={"phoneNumber"}
//       />
//     </div>
//   );
// };

// type CountrySelectProps = {
//   value?: string;
//   onChange: (event: any) => void;
//   labels?: any;
//   name: string;
// };

// const CountrySelect = ({
//   value,
//   onChange,
//   labels,
//   name,
//   ...rest
// }: CountrySelectProps) => (
//   <select
//     {...rest}
//     value={value}
//     onChange={(event) => {
//       onChange(event || undefined);
//     }}
//     name={name}
//   >
//     <option value="">{labels["ZZ"]}</option>
//     {getCountries().map((country) => {
//       const countryCode = getCountryCallingCode(country);
//       return (
//         <option key={country} value={countryCode}>
//           {labels[country]} +{countryCode}
//         </option>
//       );
//     })}
//   </select>
// );

// type CustomPhoneInputProps = {
//   value: string;
//   onChange: any;
//   customInput: any;
//   name: string;
// };

// const CustomPhoneInput = ({
//   value,
//   onChange,
//   customInput: CustomInput,
//   name,
//   ...props
// }: CustomPhoneInputProps) => {
//   return (
//     <Input
//       value={value}
//       onChange={onChange}
//       inputComponent={CustomInput}
//       name={name}
//       {...props}
//     />
//   );
// };

// export default PhoneInput;
type CustomTextInput = {
  value: any
     onChange: (val:any)=>void
     
}

const CustomTextInput = ({value, onChange, ...props}:CustomTextInput)=>{
  const handleChange = (e:any)=>{
    onChange(e.target.value)
  }
  return(
    <CustomTextField
      {...props}
      onChange={handleChange}
      value={value}
    />
  )
}

export default CustomTextInput
