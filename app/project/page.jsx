import React from 'react'
import Image from 'next/image'

const Project = () => {
  return (
    <div>
      <div className="project-wrapper ">
        <div className="hero-section mt-20">
          <div className="hero-wrapper flex justify-evenly gap-4">
            <div className="hero-text">
              <h2 className='text-4xl md:text-6xl lg:text-7xl xl:text-8xl flex flex-col gap-5 font-bold font-[cursive] text-[#171717]'>
                <span>Building</span>
                <span>Dreams with</span>
                <span>Precision.</span>
              </h2>
            </div>
              <div className=''>
                <Image
                  src={'/assets/project/dream.jpg'}
                  width={400}
                  height={400}
                  alt='dream image'
                  className='xl:w-[800px] xl:h-[450px] md:w-[400px] w-[250px] md:h-[250px] lg:w-[500px] lg:h-[300px] h-[200px] object-cover'
                />
              </div>
          </div>       
        </div>
        <section className="projects-showcase my-20">
          <h2 className='text-center my-20 text-4xl font-bold italic'>Projects</h2>
          <div className="showcase-wrapper">
            <div className="project-cards flex flex-wrap justify-evenly gap-5">
              <div className="card">
                <div className="project-img">
                  <Image
                    src={'/assets/project/kinter-website.png'}
                    width={600}
                    height={300}
                    alt='kinter website project'
                  />
                </div>
                <div className="card-content">
                  <h2>Kinter Website</h2>
                  <p>
                  This website is a showcase of my web development skills, designed for a fictional kindergarten. It highlights my ability to create a visually appealing, user-friendly, and functional platform tailored to meet the needs of parents and educators. The site features sections for programs, events, and contact information, demonstrating modern design principles and responsiveness across devices. It's a reflection of my commitment to crafting digital experiences that are both practical and engaging.
                  </p>
                  <div className="btn-wrapper">
                  <a href="https://kintergartenwebsite.vercel.app/" target='blank' className='thm-btn thm-btn-1 text-center'>
                      VISIT
                    </a>
                  </div>
                </div>
              </div>
              <div className="card">
                <div className="project-img">
                  <Image
                    src={'/assets/project/kinter-website.png'}
                    width={600}
                    height={300}
                    alt='kinter website project'
                  />
                </div>
                <div className="card-content">
                  <h2>Kinter Website</h2>
                  <p>
                  This website is a showcase of my web development skills, designed for a fictional kindergarten. It highlights my ability to create a visually appealing, user-friendly, and functional platform tailored to meet the needs of parents and educators. The site features sections for programs, events, and contact information, demonstrating modern design principles and responsiveness across devices. It's a reflection of my commitment to crafting digital experiences that are both practical and engaging.
                  </p>
                  <div className="btn-wrapper">
                  <a href="https://kintergartenwebsite.vercel.app/" target='blank' className='thm-btn thm-btn-1 text-center'>
                      VISIT
                    </a>
                  </div>
                </div>
              </div>
              <div className="card">
                <div className="project-img">
                  <Image
                    src={'/assets/project/kinter-website.png'}
                    width={600}
                    height={300}
                    alt='kinter website project'
                  />
                </div>
                <div className="card-content">
                  <h2>Kinter Website</h2>
                  <p>
                  This website is a showcase of my web development skills, designed for a fictional kindergarten. It highlights my ability to create a visually appealing, user-friendly, and functional platform tailored to meet the needs of parents and educators. The site features sections for programs, events, and contact information, demonstrating modern design principles and responsiveness across devices. It's a reflection of my commitment to crafting digital experiences that are both practical and engaging.
                  </p>
                  <div className="btn-wrapper">
                    <a href="https://kintergartenwebsite.vercel.app/" target='blank' className='thm-btn thm-btn-1 text-center'>
                      VISIT
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

    </div>
  )
}

export default Project