'use client'

import React from 'react'
import { SignedIn, UserButton, useAuth } from '@clerk/nextjs'
import Link from 'next/link';

function Header() {

    const { isLoaded, userId } = useAuth();

  return (
    <div className=' shadow-md'>
        <div className='flex p-4 max-w-6xl items-center mx-auto'>
            <h1 className='font-bold flex-1 text-4xl'><Link href="/">PamPa<span className='text-indigo-600'>m</span></Link></h1>
            <div>
                {
                    !isLoaded || !userId &&
                
                    <ul className='flex items-center space-x-6 font-semibold'>
                        
                        <li>
                            <Link href={'/sign-up'}>
                                <span>sign up</span>
                             </Link>
                        </li>
                        
                           
                        <li className='px-4 py-2 bg-slate-300 text-black rounded-md'>
                            <Link href={'/sign-in'}>
                                <span>sign in</span>
                            </Link>
                        </li>
                       
                        
                    </ul>
                }
                <SignedIn>
                    <div className='flex items-center space-x-6'>
                        <Link href='/dashboard' className='bg-indigo-300 px-4 font-semibold p-2 rounded-md'>
                            <span>Dashboard</span>
                        </Link>
                        <UserButton />
                    </div>
                </SignedIn>
            </div>

        </div>
    </div>
  )
}

export default Header