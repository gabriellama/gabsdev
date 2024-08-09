import React from 'react'
import logoGabs from '../../assets/logogab.png'

function Navbar() {
 
  

  return (
    <>
     <div className='w-full bg-white text-cyan-500 flex justify-center py-4'>
          <div className="container flex justify-between text-xl">
            <div>
            <img src={logoGabs} alt="" className='w-36'/>
            </div>

            <div className='flex gap-8 items-center'>
              <div className='hover:underline'>Home</div>
              <div className='hover:underline'>About</div>
              <div className='hover:underline'>Skills</div>
              <div className='hover:underline'>Services</div>
              <div className='hover:underline'>Project</div>
              <div className='hover:underline'>Contact</div>
            </div>
          </div>
        </div>
    </>
  )
}

export default Navbar