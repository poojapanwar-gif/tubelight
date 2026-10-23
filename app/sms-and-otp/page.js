import DataVerificarion from '@/components/Common/DataVerificarion'
import SmsOtpBanner from '@/components/SMSAndOTP/SmsOtpBanner'
import SmsOtpCall from '@/components/SMSAndOTP/SmsOtpCall'
import SmsOtpCustomer from '@/components/SMSAndOTP/SmsOtpCustomer'
import SmsOtpDeveloper from '@/components/SMSAndOTP/SmsOtpDeveloper'
import SmsOtpUseCase from '@/components/SMSAndOTP/SmsOtpUseCase'
import React from 'react'

const page = () => {
  return (
    <>
      <SmsOtpBanner/>
      <SmsOtpCall/>
      <SmsOtpCustomer/>
      <SmsOtpUseCase/>
      <SmsOtpDeveloper/>
      <DataVerificarion/>
    </>
  )
}

export default page
