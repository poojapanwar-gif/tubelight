import DataVerificarion from '@/components/Common/DataVerificarion'
import ProductsFaqs from '@/components/Common/ProductsFaqs'
import InstagramBanner from '@/components/Instagram/InstagramBanner'
import InstagramCall from '@/components/Instagram/InstagramCall'
import InstagramCase from '@/components/Instagram/InstagramCase'
import InstagramCustomer from '@/components/Instagram/InstagramCustomer'
import InstagramDeveloper from '@/components/Instagram/InstagramDeveloper'
import { instagramFaqData } from '@/data/faqData'
import React from 'react'

const page = () => {
  return (
    <>
     <InstagramBanner/>
     <InstagramCall/>
     <InstagramCustomer/>
     <InstagramCase/>
     <ProductsFaqs data={instagramFaqData}/>
     <InstagramDeveloper/>
     <DataVerificarion/>
    </>
  )
}

export default page
