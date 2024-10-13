import React from 'react'
import Image from 'next/image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter, faGithub, faFacebook, faTiktok, faYoutube, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const Home = () => {
  return (
    // we shall have a div with some eye touching nice font and clear to useer it shall be a skew with the turn and the deg properties
    <div className="main-container flex flex-col gap-[100px]">
      <div className="min-h-full mt-[15px] overflow-hidden flex gap-10">
        <div className="w-[50%]  h-[800px] flex flex-col gap-4 py-[150px] items-center text-4xl">
          <> 
            <span className="flex items-center gap-4 py-4">Hi, I am <h1 className="name text-yellow-500 text-6xl">Muwanguzi Isaac</h1></span> 
            
          </>
          <p className="text-2xl">A passionate frontend and backend Web Developer</p>
          <div className="text-2xl flex gap-[50px] mt-[100px]">
            <button className="btn border-none bg-blue-900 text-white">Projects</button>
            <button className="btn">Contact Me</button>
          </div>
        </div>
        <div className="w-[50%] rounded-[20px] overflow-hidden max-md:hidden">
          <Image 
          src="/my-picture.jpg"  
          width={800}
          height={800}
          alt="MY IMAGE"
          className='rounded-[20px] shadow-lg my-image'
        />
        </div>
        
      </div>
      <h1 className="text-4xl font-bold text-center">Benefits</h1>
      <section className="h-[50vh] w-full flex justify-evenly bg-gray-100 py-6 overflow-hidden">
          <div className="">
            {/* this will contain another image */}
            <Image 
            src="/my-picture.jpg"  
            width={450}
            height={400}
            alt="MY IMAGE"
            className='rounded-[20px] shadow-lg my-image'
          />
          </div>
          <div className="max-w-[500px] bg-gray-100 shadow-lg rounded-[20px] flex justify-center items-center px-6 text-2xl">
            {/* this will contain some description */}
            <h2>Creative mindset and the eye catching websites is the routine for my clients to generate them more online presence from the customers</h2>
          </div>
      </section>
      <h1 className="text-4xl text-center font-bold">Projects</h1>

      <section className="h-[60vh] flex bg-gray-100 py-6 px-6">
        <div className="service-container flex justify-between w-full items-center">
          <div className="services">
            <h2 className="">Todo Application</h2>
          </div>
          <div className="services">
            <h2 className="">Personal finance Tracker</h2>
          </div>
          <div className="services">
            <h2>Personal Blog</h2>
          </div>
          <div className="services">
            <h2 className="">Accounting software</h2>
          </div>
        </div>
      </section>
      <h1 className="text-4xl text-center font-bold">Services</h1>

      <section className="h-[60vh] flex flex-col bg-gray-100 px-6">
        <h1 className="text-3xl text-center font-bold py-10">Website</h1>
        <div className="service-container flex justify-between w-full items-center">
          <div className="services">
            <h2 className="">Development</h2>
          </div>
          <div className="services">
            <h2 className="">Design</h2>
          </div>
          <div className="services">
            <h2 className="">Maintaince</h2>
          </div>
        </div>
      </section>
      <section>
        <form className="justify-center w-full flex gap-6 shadow-lg py-6">
          <input type="text" placeholder="isaac@gamil.com" className="bg-gray-100 rounded-[10px] px-6 py-4 w-[20%] focus:outline-none outline-none shadow-lg" />
          <button className="btn border-none bg-amber-800 text-white text-xl font-medium rounded-[10px] shadow-lg">Subscribe</button>
        </form>
      </section>
      <footer className="h-[10vh] bg-gray-100 rounded-t-[200px] flex justify-center items-center text-3xl gap-6">
          {/* social media links github, linkden, instagram, tiktok, facebook, instagram */}
          <FontAwesomeIcon icon={faGithub} className='brand-icons'/>
          <FontAwesomeIcon icon={faLinkedin} className='brand-icons'/>
          <FontAwesomeIcon icon={faInstagram} className='brand-icons'/>
          <FontAwesomeIcon icon={faTwitter} className='brand-icons'/>
          <FontAwesomeIcon icon={faFacebook} className='brand-icons'/>
          <FontAwesomeIcon icon={faTiktok} className='brand-icons'/>
          <FontAwesomeIcon icon={faYoutube} className='brand-icons'/>
      </footer>
    </div>
  )
}

export default Home