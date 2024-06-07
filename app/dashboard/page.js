'use client'

import DashboardHero from '@/components/DashboardHero';
import Items from '@/components/Items';
import { RedirectToSignIn, SignedIn, SignedOut } from '@clerk/nextjs'
import React from 'react'

function Dashboard() {

  

  return (
   <>
    <SignedIn>
      <div className='mx-auto max-w-6xl p-4 '>
        <DashboardHero/>
        <div>
          <Items/>
        </div>
      </div>

    </SignedIn>
    <SignedOut>
      <RedirectToSignIn redirectUrl='/sign-in' />
    </SignedOut>
   </>
  )
}

export default Dashboard