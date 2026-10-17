import ClickCallBanner from '@/components/ClickToCall/ClickCallBanner'
import ClickUseCases from '@/components/ClickToCall/ClickUseCases'
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
    </>
  )
}

export default page
