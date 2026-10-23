import ContactCenter from '@/components/Common/ContactCenter'
import MaskingBanner from '@/components/NumberMasking/MaskingBanner'
import MaskingCall from '@/components/NumberMasking/MaskingCall'
import MaskingCustomer from '@/components/NumberMasking/MaskingCustomer'
import MaskingDeveloper from '@/components/NumberMasking/MaskingDeveloper'
import MaskingUseCase from '@/components/NumberMasking/MaskingUseCase'
import React from 'react'

const page = () => {
  return (
    <>
     <MaskingBanner/>
     <MaskingCall/>
     <MaskingCustomer/>
     <MaskingUseCase/> 
     <MaskingDeveloper/>
     <ContactCenter/>
    </>
  )
}

export default page
