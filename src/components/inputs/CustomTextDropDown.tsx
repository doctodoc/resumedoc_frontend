import { TextField } from '@mui/material'
import React from 'react'

type PropType = {
  listData?: Array<any>
   helperText?: string
   label?: string
   id?: string
   className?: string
   defaultValue?: any
}

const CustomTextDropDown = ({listData, helperText, label, id, className, defaultValue}:PropType) => {
  return (
    <div>
        <TextField
          id={id}
          select
          label={label}
          defaultValue={defaultValue}
          helperText={helperText}
        >
          
        </TextField>
    </div>
  )
}

export default CustomTextDropDown