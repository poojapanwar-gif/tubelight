import DataVerificarion from '@/components/Common/DataVerificarion'
import ShortCodeBanner from '@/components/ShortCodeSMS/ShortCodeBanner'
import ShortCodeCall from '@/components/ShortCodeSMS/ShortCodeCall'
import ShortCodeCase from '@/components/ShortCodeSMS/ShortCodeCase'
import ShortCodeCustomer from '@/components/ShortCodeSMS/ShortCodeCustomer'
import ShortCodeDeveloper from '@/components/ShortCodeSMS/ShortCodeDeveloper'
import React from 'react'

const page = () => {
  return (
    <>
     <ShortCodeBanner/>
     <ShortCodeCall/>
     <ShortCodeCustomer/>
     <ShortCodeCase/>
     <ShortCodeDeveloper/>
     <DataVerificarion/> 
    </>
  )
}

export default page
