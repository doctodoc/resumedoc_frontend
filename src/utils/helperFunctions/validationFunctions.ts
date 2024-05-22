import { validFileExtensions } from "../helperData/validationData";

export const isValidFileType = (fileName: string, fileType:string ) => {
    const fileExtension = fileName.split('.').pop() || ''
    
   return Boolean(fileName) && validFileExtensions[fileType].indexOf(fileExtension) > -1;
  }

export const isStartDateBeforeEndDate = (startDate: string, endDate: string)=>{
    return startDate < endDate
}
