import React from 'react'
import Image from 'next/image'

const Contact = () => {
  return (
    <div>
       <div className="contact-wrapper mt-10">
        <div className="hero-section">
          <div className="content-wrapper flex flex-col items-center gap-5 justify-center w-full h-full px-4 text-center">
            <h2 className='text-6xl font-bold font-[cursive]'>Get in touch</h2>
            <p className='text-gray-600 text-base md:text-lg xl:text-xl '>Ready to help your company scale faster? Let's chat about how we can help.</p>
          </div>
          </div>
          <div className='text-center my-10'>
            <h2 className='font-bold text-4xl '>Message Me</h2>
            <p className='text-gray-600 text-base md:text-lg xl:text-xl py-4'>I will get back to you within 24 hours.</p>
          </div>
          <form action="muwanguziisaacuganda@gnail.com" className='flex flex-col items-center pb-10'>
              <div className="form-wrapper flex flex-col w-full lg:w-4/6 xl:w-[40%] gap-5 ">
                  <div className="usernames flex flex-col md:flex-row gap-5 justify-between">
                    <input type="text" placeholder='First name' />
                    <input type="text" placeholder='Last name'  />
                  </div>
                  <div className='w-full flex flex-col gap-5'>
                    <input type="email" placeholder='you@company.com' className='w-full' />
                    <input type="tel" placeholder='+256700000000' className='w-full' />
                  </div>
              </div>
              <div className='flex justify-center mt-5'>
                <button type='submit' className='thm-btn thm-btn-3'>SEND MESSAGE</button>
              </div>
          </form>
       </div>
    </div>
  )
}

export default Contact