import ContactCenter from '@/components/Common/ContactCenter'
import TextEduBanner from '@/components/TextEdu/TextEduBanner'
import TextEduCall from '@/components/TextEdu/TextEduCall'
import TextEduCase from '@/components/TextEdu/TextEduCase'
import TextEduCustomer from '@/components/TextEdu/TextEduCustomer'
import TextEduDeveloper from '@/components/TextEdu/TextEduDeveloper'
import React from 'react'

const page = () => {
  return (
    <>
      <TextEduBanner/>
      <TextEduCall/>
      <TextEduCustomer/>
      <TextEduCase/>
      <TextEduDeveloper/>
      <ContactCenter/>
    </>
  )
}

export default page
