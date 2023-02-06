import React from 'react'
import Image from 'next/image'
import Logo from '../../../public/assets/blazingwa.svg'
import {BsChevronDown} from 'react-icons/bs'

const NavAuth = () => {
  return (
    <div>
        <div className=' mx-10 py-5 flex items-center'>
      {/* Logo */}
          <Image src={Logo} alt="" className='w-36'/>
          
          {/* Dropdown */}
          <div className='ml-auto'>
            <div className='flex space-x-5 items-center bg-bg-login p-3 rounded-md'>
              <p>English</p>
              <BsChevronDown className='w-3.5'/>
            </div>
          </div>
        </div>
    </div>
  )
}

export default NavAuth