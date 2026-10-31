import DataVerificarion from '@/components/Common/DataVerificarion'
import ProductsFaqs from '@/components/Common/ProductsFaqs'
import FacebookBanner from '@/components/Facebook/FacebookBanner'
import FacebookCall from '@/components/Facebook/FacebookCall'
import FacebookCase from '@/components/Facebook/FacebookCase'
import FacebookCustomer from '@/components/Facebook/FacebookCustomer'
import FacebookDeveloper from '@/components/Facebook/FacebookDeveloper'
import React from 'react'

const page = () => {
  return (
    <>
     <FacebookBanner/>
     <FacebookCall/>
     <FacebookCustomer/> 
     <FacebookCase/>
     <ProductsFaqs/>
     <FacebookDeveloper/>
     <DataVerificarion/>
    </>
  )
}

export default page
