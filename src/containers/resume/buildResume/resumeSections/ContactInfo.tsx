import CurvedButton from '@/components/buttons/CurvedButton'
import InputWithTag from '@/components/inputs/InputWithTag'
import { Add } from '@mui/icons-material'
import React from 'react'

const ContactInfo = () => {
  return (
    <div>
       <div className="w-full flex flex-col gap-3 items-center">
      <section className="w-full flex flex-col justify-center p-4">
        <div>
            {/* email */}
            {/* phone */}
            {/* location */}
        </div>

        <div>
            <h1>Website, </h1>
        </div>

      </section>
      <CurvedButton className="bg-primary text-white flex gap-3 w-fit" py={"2"}>
        <p>Add Contact </p>
        <Add />
      </CurvedButton>
    </div> 
    </div>
  )
}

export default ContactInfo