import { useDialog } from "@/api/zustand/stores/dialog";
import SectionInfoDialog from "@/containers/resume/buildResume/sections/SectionInfoDialog"

type Props = {
children: any;

}

const DialogProvider = ({children}:Props) => {
  const {close, isOpen, payload} = useDialog('resume')
  return (
    <div>
        <>
          <SectionInfoDialog close={close} isOpen={isOpen} content={payload?.item}/>
        </>
      {children}
    </div>
  )
}

export default DialogProvider