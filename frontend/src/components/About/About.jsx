import React from 'react'
import { Link } from 'react-router-dom'; 
import aboutImg from "../../assets/images/about.png"
import aboutCardImg from "../../assets/images/about-card.png"

const About = () => {
  return (
    <section>
      <div className="container">
        <div className='flex justify-between gap-0 lg:gap-8 xl:gap-0 flex-col lg:flex-row'>
          {/* about image */}
          <div className='relative w-3/4 lg:w-1/2 xl:w-[770px] z-18 order-2 lg:order-1'>
            <img src={aboutImg} alt=""/>
            <div className='absolute z-20 bottom-4 w-[200px] md:w-[300px] right-[-30%] md:right-[-7%] lg:right-[22%]'>
              <img src={aboutCardImg} alt=""/>
            </div>
          </div>
          {/* about content */}
          <div className='w-full lg:w-1/2 xl:w-[678px] order-1 lg:order-2'>
            <h2 className='heading text-2xl lg:text-3xl'>Proud to be one of the nation's best</h2>
            <p className='text__area text-lg mt-4'>
              Recognized as Kenya's best doctor, excels in providing comprehensive healthcare
              with over 30 years of experience. His dedication to patient care and medical 
              advancements has earned him numerous accolades and a reputation for excellence.
              His innovative approaches and compassionate care make him a leading figure in the medical community.
            </p>
            <p className='text__area text-lg mt-4'>
              Our hospital is committed to providing exceptional healthcare services through compassionate 
              patient care, innovative medical practices, and continuous improvement. 
              We aim to create a healing environment that prioritizes the well-being of
              our community and fosters trust and respect. Our goal is to advance medical excellence
              and ensure every patient receives the highest standard of care.
            </p>
            <Link to='/'>
              <button className="btn mt-4 p-3 text-lg">Learn More</button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
