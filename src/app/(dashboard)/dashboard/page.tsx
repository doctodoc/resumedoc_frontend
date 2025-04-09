'use server'
 
import { redirect } from 'next/navigation'

const page = () => {
  redirect(`/dashboard/resume`)
};

export default page;
