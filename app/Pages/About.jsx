import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram, faYoutube, faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'
import { faArrowTrendUp } from '@fortawesome/free-solid-svg-icons'


const About = () => {
  return (
    <div>
      {/* div containing some text */}
      <section id="hero-section" className='flex justify-evenly mt-[100px]'>
        <div>
          <h1 className='flex flex-col text-9xl font-bold'>
            <span>I REALLY</span>
            <span>LOVE TO </span>
            <span>TALK WITH</span>
            <span>PEOPLE</span>
          </h1>
        </div>
        <div>
          <Image 
            src="/my-picture.jpg"
            width={500}
            height={700}
            className='w-[900px] h-[600px] object-cover object-top my-image'
          />
        </div>
      </section>
      <footer className='grid grid-cols-3 py-6 items-center gap-5'>
        <div className="followus flex flex-col max-w-[300px]">
          <h3 className='text-xl font-medium '>Follow Us</h3>
          <Link className='follow-icons' href={'/'}>
          <FontAwesomeIcon className='icons' icon={faLinkedin}/>
          Linkedln
          <FontAwesomeIcon className=' trendUp-icon' icon={faArrowTrendUp}/>
          </Link>
          <Link className='follow-icons' href={'/'}>
          <FontAwesomeIcon className='icons' icon={faGithub}/>
          Github
          <FontAwesomeIcon className=' trendUp-icon' icon={faArrowTrendUp}/>
          </Link>
          <Link className='follow-icons' href={'/'}>
          <FontAwesomeIcon className='icons' icon={faInstagram}/>
          Instagram
          <FontAwesomeIcon className=' trendUp-icon' icon={faArrowTrendUp}/>
          </Link>
          <Link className='follow-icons' href={'/'}>
          <FontAwesomeIcon className='icons' icon={faYoutube}/>
          Youtube
          <FontAwesomeIcon className=' trendUp-icon' icon={faArrowTrendUp}/>
          </Link>
        </div>
        <div className="des w-[500px]">
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam itaque rerum laboriosam deserunt quod dolorum eligendi tempore voluptate autem laborum nostrum inventore, reiciendis porro excepturi enim soluta praesentium in ratione?</p>
          <p>Laboris nisi ut ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipisciing elit sed do eiusmod tempor incididnut quis nostrud exercitation ullamco labris nisi
          </p>
        </div>
        <div className="quote w-[500px] flex flex-col gap-5">
          <p className='font-bold'>
          ‟Quis autem val enum iure reprehendetit qui in ae voluplate velit esse quam nihiil molestiae consequatur, vel illum qui dolorem eum  fugiat quo voluptas nulla pariatur. consectetur adipisciing elit. sed do eiusmod tempor‟
          </p>
          <div className='testimonial flex justify-between items-center'>
            <h2 className='flex flex-col'>
                <span className='text-gray-300 font-medium'>Testimonila By</span>
                <span>Cynthia Summer</span>
              </h2>
              <div className="testimonalprofile w-[50px] h-[50px] rounded-full bg-red-500">
                {/* this includes the image from the person who is testifying */}
                <Image 
                  src="/my-picture.jpg"
                  width={200}
                  height={100}
                  className='w-[200px] h-auto object-cover object-top testimonal-image rounded-full'
          />
              </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default About