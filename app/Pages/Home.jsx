import React from 'react'
import Image from 'next/image'
const Home = () => {
  return (
    // we shall have a div with some eye touching nice font and clear to useer it shall be a skew with the turn and the deg properties
    
    <div className="min-h-full mt-[15px] overflow-hidden flex gap-10">
      <div className="w-[50%]  h-[800px] flex flex-col gap-4 py-[150px] items-center text-4xl bg-gray-100 rounded-[10px] shadow-lg">
        <h1>Hi, I am Muwanguzi Isaac</h1>
        <p className="text-2xl">A passionate frontend and backend Web Developer</p>
        <div className="text-2xl flex gap-[50px] mt-[100px]">
          <button className="btn border-none bg-blue-900 text-white">Projects</button>
          <button className="btn">Contact Me</button>
        </div>
      </div>
      <div className="w-[50%] rounded-[20px] overflow-hidden">
        <Image 
        src="/my-picture.jpg"  
        width={800}
        height={800}
        alt="MY IMAGE"
        className='rounded-[20px] shadow-lg my-image'
      />
      </div>
    </div>
  )
}

export default Home