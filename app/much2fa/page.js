import MuCh2FABanner from '@/components/MuCh2FA/MuCh2FABanner'
import MuCh2FACall from '@/components/MuCh2FA/MuCh2FACall'
import MuCh2FACase from '@/components/MuCh2FA/MuCh2FACase'
import MuCh2FACustomer from '@/components/MuCh2FA/MuCh2FACustomer'
import MuCh2FADeveloper from '@/components/MuCh2FA/MuCh2FADeveloper'
import MuChVerification from '@/components/MuCh2FA/MuChVerification'
import React from 'react'

const page = () => {
  return (
    <>
      <MuCh2FABanner/>
      <MuCh2FACall/>
      <MuCh2FACustomer/>
      <MuCh2FACase/>
      <MuCh2FADeveloper/>
      <MuChVerification/>
    </>
  )
}

export default page
