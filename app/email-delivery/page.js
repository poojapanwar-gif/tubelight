import DataVerificarion from '@/components/Common/DataVerificarion'
import EmailBanner from '@/components/EmailDelivery/EmailBanner'
import EmailCall from '@/components/EmailDelivery/EmailCall'
import EmailCustomer from '@/components/EmailDelivery/EmailCustomer'
import EmailDeveloper from '@/components/EmailDelivery/EmailDeveloper'
import EmailUseCase from '@/components/EmailDelivery/EmailUseCase'
import React from 'react'

const page = () => {
  return (
    <>
      <EmailBanner/>
      <EmailCall/>
      <EmailCustomer/>
      <EmailUseCase/>
      <EmailDeveloper/>
      <DataVerificarion/>
    </>
  )
}

export default page
