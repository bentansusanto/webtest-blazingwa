import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Background from '../../public/assets/login-bg.svg.svg'
import EmailIcon from '../../public/assets/email-icon.svg'
import Password from '../../public/assets/password-icon.svg'
import ShowHide from '../../public/assets/show-hide.svg'
import {BiShow} from 'react-icons/bi'
import {BsCheckSquareFill} from 'react-icons/bs'
import { iconApp, loginAlternative } from './libs/StoreType'



const Login = () => {
  const [showHide, setShowHide] = useState(false)
  const [checkBox, setCheckBox] = useState(false)


  return (
    <div className='mx-36 my-14'>
      <div className='bg-bg-login w-full h-full space-x-12 py-8 justify-center px-5 flex'>
        {/* Background ilustration login page */}
          <div>
            <Image src={Background} alt="" className='w-[30rem]'/>
            
            {/* Icon playstore and appstore */}
            <div className='flex space-x-5 justify-center'>
              {
                iconApp.map((val, idx) => (
                  <Link key={idx} href={val.link}>
                    <Image src={val.image} alt="" className='w-22'/>
                  </Link>
                ))
              }
            </div>
          </div>
          <div className='bg-[#d1d1d1] w-[1px] h-[68vh]'/>
          {/* Form login */}
          <div>
              <h2 className='text-2xl font-semibold text-green'>Login</h2>
              {/* Alternative for login */}
              <div className='flex space-x-5 my-10'>
                {
                  loginAlternative.map((val, idx) => (
                    <Link href={val.link} key={idx} className="flex items-center rounded-md space-x-3 p-2.5" style={{background : val.color, color:val.colorFont}}>
                        <Image src={val.image} alt=""/>
                        <p>{val.page}</p>
                    </Link>
                  ))
                }
              </div>
              <div className='flex space-x-5 items-center'>
                <div className='bg-[#9c9c9c] h-[.5px] w-full'/>
                <p className='text-black'>Or</p>
                <div className='bg-[#9c9c9c] h-[.5px] w-full'/>
              </div>

              {/* Form section for login */}
              <div className='my-10'>
                <form>
                  <div className="mb-3 space-y-2">
                    <label htmlFor="#" className='text-[15.4px] font-medium text-black'>Email</label>
                    <div className='bg-white p-3 rounded-md flex items-center space-x-3'>
                      <Image src={EmailIcon} alt=""/>
                      <div className='bg-[#d1d1d1] w-[1px] h-6'/>
                      <input type="email" placeholder='Enter your email here'  className='w-full'/>
                    </div>
                    </div>
                  <div className="mb-3 space-y-2">
                    <label htmlFor="#" className='text-[15.4px] font-medium text-black'>Password</label>
                    <div className='bg-white p-3 rounded-md flex items-center space-x-3'>
                      <Image src={Password} alt=""/>
                      <div className='bg-[#d1d1d1] w-[1px] h-6'/>
                      <input type="password" placeholder='Enter your email here'  className='w-full'/>
                      <div onClick={() => setShowHide(!showHide)}>
                        {
                          showHide ? (<BiShow className='text-lg'/>) : (<Image src={ShowHide} alt="" className='text-xl'/>)
                        }
                      </div>
                    </div>
                    </div>
                  <div className=" flex items-center mb-3">
                    {/* Checkbox Remember me */}
                    <div className='flex items-center space-x-3'>
                        <div onClick={() => setCheckBox(!checkBox)}>
                            {
                              checkBox ? (<BsCheckSquareFill className='text-lg text-green'/>) : (<div className='border-[1px] border-[#d1d1d1] bg-white p-2 rounded-sm'/>)
                            }
                        </div>
                        <p>Remember me</p>
                    </div>
                    {/* Forgot Password */}
                    <Link href={'/login'} className="ml-auto">
                      <p>Forgot Password</p>
                    </Link>
                    </div>
                    <div className="mb-3">
                      <button className='bg-green py-3 w-full text-white'>Login</button>
                    </div>
                    <p className='text-center'>Do not have an account? <Link href={'/register'} className="text-green">Sign Up for free trial</Link></p>
                </form>
              </div>
              
          </div>
      </div>
      
    </div>
  )
}

export default Login