import ContactCenter from '@/components/Common/ContactCenter'
import IVRAutomate from '@/components/IVRSolution/IVRAutomate'
import IVRBanner from '@/components/IVRSolution/IVRBanner'
import IVRDeveloper from '@/components/IVRSolution/IVRDeveloper'
import IVRUseCase from '@/components/IVRSolution/IVRUseCase'
import React from 'react'
const page = () => {
  return (
    <>
     <IVRBanner/> 
     <IVRAutomate/>
     <IVRUseCase/>
     <IVRDeveloper/>
     <ContactCenter/>
    </>
  )
}

export default page
