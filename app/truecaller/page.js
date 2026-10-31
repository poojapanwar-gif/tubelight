import ContactCenter from '@/components/Common/ContactCenter'
import TruecallerBanner from '@/components/Truecaller/TruecallerBanner'
import TruecallerCall from '@/components/Truecaller/TruecallerCall'
import TruecallerCase from '@/components/Truecaller/TruecallerCase'
import TruecallerCustomer from '@/components/Truecaller/TruecallerCustomer'
import TruecallerDeveloper from '@/components/Truecaller/TruecallerDeveloper'
import React from 'react'

const page = () => {
  return (
    <>
      <TruecallerBanner/>
      <TruecallerCall/>
      <TruecallerCustomer/>
      <TruecallerCase/>
      <TruecallerDeveloper/>
      <ContactCenter/>
    </>
  )
}

export default page
