import DataVerificarion from '@/components/Common/DataVerificarion'
import GbmBanner from '@/components/GBM/GbmBanner'
import GbmCall from '@/components/GBM/GbmCall'
import GbmCustomer from '@/components/GBM/GbmCustomer'
import GbmDeveloper from '@/components/GBM/GbmDeveloper'
import GbmUseCase from '@/components/GBM/GbmUseCase'
import React from 'react'

const page = () => {
  return (
    <>
     <GbmBanner/>
     <GbmCall/>
     <GbmCustomer/>
     <GbmUseCase/>
     <GbmDeveloper/>
     <DataVerificarion/> 
    </>
  )
}

export default page
