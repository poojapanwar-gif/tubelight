import DataVerificarion from '@/components/Common/DataVerificarion'
import RcsBanner from '@/components/RCS/RcsBanner'
import RcsCall from '@/components/RCS/RcsCall'
import RcsCustomer from '@/components/RCS/RcsCustomer'
import RcsDeveloper from '@/components/RCS/RcsDeveloper'
import RcsUseCase from '@/components/RCS/RcsUseCase'
import React from 'react'

const page = () => {
  return (
    <>
      <RcsBanner/>
      <RcsCall/>
      <RcsCustomer/>
      <RcsUseCase/>
      <RcsDeveloper/>
      <DataVerificarion/>
    </>
  )
}

export default page
