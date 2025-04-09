export const countArrObj = (arr:any[], value: string, k: keyof any )=>{
    return arr.reduce((a, i)=> value === i[k] ? a + 1: a , 0)
    }

export const checkIfObjectOrLiteral =(value: any, keyName:string)=>{
    
    if (typeof value === "object" &&
    !Array.isArray(value)){
        checkIfObjectOrLiteral(value[keyName], keyName)
    }else{
        return value
    }
}