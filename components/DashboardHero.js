'use client'

import React from 'react'
import { useUser } from '@clerk/nextjs'

function DashboardHero() {
    const { user} = useUser();
  return (
    <div>
        <div className='flex items-center justify-between p-2 border-b border-gray-300 pb-6'>
          <div>
            <div><h2 className='font-semibold text-4xl'>Hello {user?.firstName}</h2></div>
            <div><h3 className='text-gray-400 text-2xl'>Welcome Back !</h3></div>
          </div>
          <div className='flex flex-col space-y-4'>
            <div className='bg-gradient-to-b from-slate-800 to-indigo-700 p-3 w-full justify-center px-8 text-white flex items-center space-x-6 cursor-pointer'>
              <span>Preview Catalog</span>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25" />
              </svg>
            </div>
            <div className='flex items-center space-x-4 bg-gradient-to-b from-indigo-700 to-slate-800 rounded-md pr-4'>
              <input type="search" name="" id="" className='px-2 py-2 w-96 rounded-l-md border border-solid border-gray-400' placeholder='Search for an Item ....' />
              <div className='cursor-pointer text-white'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                </svg>
              </div>
              
            </div>

          </div>
            
        </div>
    </div>
  )
}

export default DashboardHero