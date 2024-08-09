import React from 'react'
import logoGabs from '../../assets/logogab.png'
import {GithubLogo, InstagramLogo, LinkedinLogo } from '@phosphor-icons/react'

function Footer() {
 
  

  return (
    <>
        <div className="flex justify-center bg-white text-cyan-500">
          <div className="container flex flex-col items-center py-4">
            <div className=''>
                <img src={logoGabs} alt="" className='w-36'/>
            </div>
            
            <p className='text-lg font-bold'>Follow me on social media</p>
            <div className='flex gap-2'>
              <LinkedinLogo size={34} weight='bold' />
              <InstagramLogo size={34} weight='bold' />
              <GithubLogo size={34} weight='bold' />
            </div>
            <p className='text-lg'>2024 © All rights reserved - Gabriella Martins </p>
          </div>
        </div>
      </>
  )
}

export default Footer