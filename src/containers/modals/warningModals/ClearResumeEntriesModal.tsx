import React from 'react'
import GenericWarningModal, { WarningProps } from './GenericWarningModal'

const ClearResumeEntriesModal = ({isOpen, close, proceed,}:WarningProps) => {
  return (
    <GenericWarningModal proceed={proceed} isOpen={isOpen} proceedButtonText={"Clear Entries"} close={close} warningMsg='Your entries would be cleared permanently' headerText='Are you sure you want to clear your entries?'/>
  )
}

export default ClearResumeEntriesModal