import ContactCenter from '@/components/Common/ContactCenter'
import VoiceBanner from '@/components/VoiceBroadcast/VoiceBanner'
import VoiceBuilder from '@/components/VoiceBroadcast/VoiceBuilder'
import VoiceCall from '@/components/VoiceBroadcast/VoiceCall'
import VoicePlatfrom from '@/components/VoiceBroadcast/VoicePlatfrom'
import React from 'react'

const page = () => {
  return (
    <>
     <VoiceBanner/> 
     <VoiceCall/>
     <VoicePlatfrom/>
     <VoiceBuilder/>
     <ContactCenter/>
    </>
  )
}

export default page
