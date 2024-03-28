// export const normTailwindVal = (val: string| number)=>{
//     if val
//     return val
// }

export const transfromPageNumber = (sz:number | string)=>{
    const size = Number(sz)
    switch(size){
        case 1:
            return "one page"
        case 2: 
            return "two pages"
        default:
            return "not recognized"
    }
}