import Link from 'next/link'
import React from 'react'

function SignUpLayout({children}) {
  return (
    <div className='mx-auto max-w-6xl'>
        <div className='grid grid-cols-2 mt-10 justify-center items-center'>
            <div>
                <img src="/log-in-girl.svg" alt="log in image" />
            </div>
            <div className='p-10'>
                <div >
                    {children}
                </div>
            </div>

        </div>
    </div>
  )
}

export default SignUpLayout