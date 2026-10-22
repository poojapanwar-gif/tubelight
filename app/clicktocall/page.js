import ClickCallBanner from '@/components/ClickToCall/ClickCallBanner'
import ClickUseCases from '@/components/ClickToCall/ClickUseCases'
import ContactCenter from '@/components/Common/ContactCenter'
import ForDeveloper from '@/components/ClickToCall/ForDeveloper'
import WebsiteCRM from '@/components/ClickToCall/WebsiteCRM'
import YourCustomer from '@/components/ClickToCall/YourCustomer'
import React from 'react'

const page = () => {
  return (
    <>
    <ClickCallBanner/>
    <WebsiteCRM/>
    <ClickUseCases/>
    <YourCustomer/>
    <ForDeveloper/>
    <ContactCenter/>
    </>
  )
}

export default page
