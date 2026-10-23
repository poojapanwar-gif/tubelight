import ContactCenter from '@/components/Common/ContactCenter'
import WebRTCBanner from '@/components/WebRTC/WebRTCBanner'
import WebRTCCall from '@/components/WebRTC/WebRTCCall'
import WebRTCCustomer from '@/components/WebRTC/WebRTCCustomer'
import WebRTCDeveloper from '@/components/WebRTC/WebRTCDeveloper'
import WebRTCUseCase from '@/components/WebRTC/WebRTCUseCase'
import React from 'react'

const page = () => {
  return (
    <>
     <WebRTCBanner/>
     <WebRTCCall/>
     <WebRTCCustomer/>
     <WebRTCUseCase/>
     <WebRTCDeveloper/> 
     <ContactCenter/>
    </>
  )
}

export default page
