import BusinessBenefits from '@/components/Common/BusinessBenefits'
import ContactCenter from '@/components/Common/ContactCenter'
import ThePlatfrom from '@/components/Common/ThePlatfrom'
import PredectiveBanner from '@/components/PredectiveDialer/PredectiveBanner'
import PredectiveCall from '@/components/PredectiveDialer/PredectiveCall'
import PredectiveDeveloper from '@/components/PredectiveDialer/PredectiveDeveloper'
import React from 'react'

const page = () => {
  return (
    <>
     <PredectiveBanner/> 
     <PredectiveCall/>
     <BusinessBenefits/>
     <ThePlatfrom/>
     <PredectiveDeveloper/>
     <ContactCenter/>
    </>
  )
}

export default page
