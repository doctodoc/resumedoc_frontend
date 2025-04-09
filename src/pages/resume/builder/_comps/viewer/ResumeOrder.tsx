import { ResumeAliases } from '@/shared/enums/resumeEnums'
import React from 'react'

type Props = {
    orderList: Array<string> | string[][]
}

const ResumeOrder = ({orderList}:Props) => {
    if (typeof orderList[0] === "string"){
        // one column resume
        return (
            <div>
                {orderList.map(section =>(
                    <button>
                        {ResumeAliases[section as  keyof typeof ResumeAliases]}
                    </button>
                ))}
            </div>
            )
    }
    else  {
        return(

        <div>
           {orderList.map(

            (column, i)=>(
              <div>
                <p>{`Column ${i + 1}`}</p>
                
                <div className='flex flex-col gap-2'>
                    {Array.isArray(column) && column.map(section=>(
                    <button>
                        {ResumeAliases[section as  keyof typeof ResumeAliases]}
                    </button>
                    ))}
                </div>
             </div>)
           )} 
        </div>
        )
        }
}

export default ResumeOrder