import ContactCenter from '@/components/Common/ContactCenter'
import ContactCenterBanner from '@/components/ContactCenter/ContactCenterBanner'
import ContactCenterCall from '@/components/ContactCenter/ContactCenterCall'
import ContactCenterCase from '@/components/ContactCenter/ContactCenterCase'
import ContactCenterCustomer from '@/components/ContactCenter/ContactCenterCustomer'
import ContactCenterDeveloper from '@/components/ContactCenter/ContactCenterDeveloper'
import React from 'react'

const page = () => {
  return (
    <>
     <ContactCenterBanner/>
     <ContactCenterCall/>
     <ContactCenterCustomer/>
     <ContactCenterCase/>
     <ContactCenterDeveloper/>
     <ContactCenter/> 
    </>
  )
}

export default page
