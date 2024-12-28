'use client'
import React, { useEffect } from 'react';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faGithub, faFacebook, faTiktok, faYoutube, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { faArrowDown } from '@fortawesome/free-solid-svg-icons';

const Cancelled = () => {
  // Animation controls for different sections
  const controls = useAnimation();
  const [refBenefits, inViewBenefits] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [refProjects, inViewProjects] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [refServices, inViewServices] = useInView({ triggerOnce: true, threshold: 0.1 });

  useEffect(() => {
    if (inViewBenefits) controls.start({ opacity: 1, x: 0 });
    if (inViewProjects) controls.start({ opacity: 1, x: 0 });
    if (inViewServices) controls.start({ opacity: 1, x: 0 });
  }, [inViewBenefits, inViewProjects, inViewServices, controls]);

  return (
    <div className="main-container flex flex-col gap-[100px]">
      <div className="min-h-full mt-[15px] overflow-hidden flex gap-10">
        <div className="w-[50%]  h-[800px] flex flex-col gap-4 py-[150px] items-center text-4xl relative">
          <>
            <span className="flex items-center gap-4 py-4">
              Hi, I am <h1 className="name text-yellow-500 text-6xl">Muwanguzi Isaac</h1>
            </span>
          </>
          <p className="text-2xl">A passionate frontend and backend Web Developer</p>
          <div className="text-2xl flex gap-[50px] mt-[100px]">
            <button className="btn border-none bg-blue-900 text-white">Projects</button>
            <motion.button 
              className="btn"
              initial={{
                background: "linear-gradient(90deg, #1e40af 0%, #1e40af 0%, #ffffff 100%)",
                transition: { duration: .7 },
              }}
              whileHover={{
                background: "linear-gradient(90deg, #1e40af 100%, #ffffff 100%)", // Fill completely on hover
                transition: { duration: .7 },
              }}
            >
              Contact Me
              </motion.button>
              
          </div>
          <div className='flex items-center gap-10 scroll-down'>
            <FontAwesomeIcon icon={faArrowDown} className='scrolldown-icon text-gray-300'/>
            <h2 className='text-gray-300'>Scroll</h2>
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

      {/* Benefits Section */}
      <motion.h1
        ref={refBenefits}
        initial={{ opacity: 0, x: 100 }}
        animate={controls}
        transition={{ duration: 0.5 }}
        className="text-4xl font-bold text-center"
      >
        Benefits
      </motion.h1>

      <motion.section
        ref={refBenefits}
        initial={{ opacity: 0, x: 100 }}
        animate={controls}
        transition={{ duration: 0.5 }}
        className="h-[50vh] w-full flex justify-evenly bg-gray-100 py-6 overflow-hidden"
      >
        <div>
          <Image
            src="/my-picture.jpg"
            width={450}
            height={400}
            alt="MY IMAGE"
            className='rounded-[20px] shadow-lg my-image'
          />
        </div>
        <div className="max-w-[500px] bg-gray-100 shadow-lg rounded-[20px] flex justify-center items-center px-6 text-2xl">
          <h2>Creative mindset and eye-catching websites that generate more online presence for clients.</h2>
        </div>
      </motion.section>

      {/* Projects Section */}
      <motion.h1
        ref={refProjects}
        initial={{ opacity: 0, x: -100 }}
        animate={controls}
        transition={{ duration: 0.5 }}
        className="text-4xl text-center font-bold"
      >
        Projects
      </motion.h1>

      <motion.section
        ref={refProjects}
        initial={{ opacity: 0, x: 100 }}
        animate={controls}
        transition={{ duration: 0.5 }}
        className="h-[60vh] flex bg-gray-100 py-6 px-6"
      >
        <div className="service-container flex justify-between w-full items-center">
          <div className="services">
            <h2>Todo Application</h2>
          </div>
          <div className="services">
            <h2>Personal Finance Tracker</h2>
          </div>
          <div className="services">
            <h2>Personal Blog</h2>
          </div>
          <div className="services">
            <h2>Accounting Software</h2>
          </div>
        </div>
      </motion.section>

      {/* Services Section */}
      <motion.h1
        ref={refServices}
        initial={{ opacity: 0, x: -100 }}
        animate={controls}
        transition={{ duration: 0.5 }}
        className="text-4xl text-center font-bold"
      >
        Services
      </motion.h1>

      <motion.section
        ref={refServices}
        initial={{ opacity: 0, x: 100 }}
        animate={controls}
        transition={{ duration: 0.5 }}
        className="h-[60vh] flex flex-col bg-gray-100 px-6"
      >
        <h1 className="text-3xl text-center font-bold py-10">Website</h1>
        <div className="service-container flex justify-between w-full items-center">
          <div className="services">
            <h2>Development</h2>
          </div>
          <div className="services">
            <h2>Design</h2>
          </div>
          <div className="services">
            <h2>Maintenance</h2>
          </div>
        </div>
      </motion.section>

      {/* Footer Section */}
      <footer className="h-[10vh] bg-gray-100 rounded-t-[200px] flex justify-center items-center text-3xl gap-6">
        <FontAwesomeIcon icon={faGithub} className='brand-icons' />
        <FontAwesomeIcon icon={faLinkedin} className='brand-icons' />
        <FontAwesomeIcon icon={faInstagram} className='brand-icons' />
        <FontAwesomeIcon icon={faTwitter} className='brand-icons' />
        <FontAwesomeIcon icon={faFacebook} className='brand-icons' />
        <FontAwesomeIcon icon={faTiktok} className='brand-icons' />
        <FontAwesomeIcon icon={faYoutube} className='brand-icons' />
      </footer>
    </div>
  );
};

export default Cancelled;
