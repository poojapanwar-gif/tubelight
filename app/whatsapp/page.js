import DataVerificarion from '@/components/Common/DataVerificarion'
import WhatsappAdvantages from '@/components/Whatsapp/WhatsappAdvantages'
import WhatsappAPI from '@/components/Whatsapp/WhatsappAPI'
import WhatsappBanner from '@/components/Whatsapp/WhatsappBanner'
import WhatsappCall from '@/components/Whatsapp/WhatsappCall'
import WhatsappDeveloper from '@/components/Whatsapp/WhatsappDeveloper'
import React from 'react'

const page = () => {
  return (
    <>
     <WhatsappBanner/>
     <WhatsappCall/> 
     <WhatsappAPI/>
     <WhatsappAdvantages/>
     <WhatsappDeveloper/>
     <DataVerificarion/>
    </>
  )
}

export default page
