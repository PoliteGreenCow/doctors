import React from 'react';
import heroImg01 from '../assets/images/hero-img01.png';
import heroImg02 from '../assets/images/hero-img02.png';
import heroImg03 from '../assets/images/hero-img03.png';
import icon01 from '../assets/images/icon01.png';
import icon02 from '../assets/images/icon02.png';
import icon03 from '../assets/images/icon03.png';
import faqImg from '../assets/images/faq-img.png';
import featureImg from '../assets/images/feature-img.png';
import videoIcon from '../assets/images/video-icon.png';
import avatarIcon from '../assets/images/avatar-icon.png';
import { Link } from 'react-router-dom';
import { BsArrowRight } from 'react-icons/bs';
import About from '../components/About/About';
import ServicesList from '../components/Services/ServiceList';
import DoctorList from '../components/Doctors/DoctorList';
import FaqList from '../components/faq/FaqsList';
import Testimonial from '../components/Testimonial/Testimonial';

const Home = () => {
  return (
    <section className='hero__section pt-[40px] pb-[40px] px-[30px] lg:px-[50px] xl:px-[90px] 2xl:h-[800px]'>
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row lg:gap-[70px] items-start justify-between">
          {/* Hero content */}
          <div className='lg:w-[600px] mb-[30px] lg:mb-0'>
            <h1 className='text-4xl md:text-5xl leading-10 md:leading-14 text-headingColor font-extrabold'>
              We help patients live healthy, longer lives.
            </h1>
            <p className='text__para text-lg'>
              Through a holistic approach, we address not only physical
              health but also mental and emotional well-being, recognizing 
              that true health encompasses all aspects of life. By staying at the forefront of medical advancements and 
              continuously improving our practices, we aim to offer the highest quality of care. 
            </p>
            <button className='btn mt-[20px] text-lg'>Request an Appointment</button>

            {/* Hero counters */}
            <div className='mt-[30px] lg:mt-[50px] flex flex-col lg:flex-row lg:items-center gap-6 lg:gap-[30px]'>
              <div>
                <h2 className='text-[26px] lg:text-[30px] leading-[32px] lg:leading-[36px] font-[700] text-headingColor'> 
                  30+ 
                </h2>
                <span className='w-[100px] h-1 bg-yellowColor rounded-full block mt-2'></span>
                <p className='text__para'>Years of Experience</p>
              </div>
              <div>
                <h2 className='text-[26px] lg:text-[30px] leading-[32px] lg:leading-[36px] font-[700] text-headingColor'> 
                  15+
                </h2>
                <span className='w-[100px] h-1 bg-purpleColor rounded-full block mt-2'></span>
                <p className='text__para'>Clinic Locations </p>
              </div>
              <div>
                <h2 className='text-[26px] lg:text-[30px] leading-[32px] lg:leading-[36px] font-[700] text-headingColor'> 
                  100%
                </h2>
                <span className='w-[100px] h-1 bg-irisBlueColor rounded-full block mt-2'></span>
                <p className='text__para'>Patient Satisfactory</p>
              </div>
            </div>
          </div>

          {/* Hero images */}
          <div className='lg:w-[600px]'>
            <div className='mt-[30px] lg:mt-0'>
              <img src={heroImg02} alt="Image 2" className='w-full mb-[30px] lg:mb-[30px]' />
              <img src={heroImg03} alt="Image 3" className='w-full' />
            </div>
          </div>

          {/* Main Hero Image */}
          <div className='flex justify-end lg:w-[600px]'>
            <img src={heroImg01} alt="Hero Image" className='w-full md:max-w-[500px] lg:max-w-[600px] h-auto rounded-lg shadow-xl mb-6 lg:mb-0' />
          </div>
        </div>
      </div>

      {/* Additional Content */}
      <section>
        <div className='container'>
          <div className='lg:w-[570px] mx-auto'>
            <h2 className='heading text-center text-2xl lg:text-3xl'>
              Providing the best medical services :)
            </h2>
            <p className='text__para text-center text-lg lg:text-xl'>
              World-class healthcare for everyone. Our health system offers unmatched, expert healthcare.
            </p>
          </div>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-[30px] mt-[30px] lg:mt-[55px]'>
            <div className='py-[38px] px-5'>
              <div className='flex items-center justify-center'>
                <img src={icon01} alt='Icon' />
              </div>
              <div className='py-[30px] px-5'>
                 <h2 className='text-[26px] leading-9 text-headingColor font-[700] text-center'>
                  Find a Doctor
                 </h2>
                 <p className='text__para text-center'>
                  World-class care for everyone. Our health system offers 
                  unmatched, expert healthcare. From the lab to the clinic.
                 </p>
                 <Link
                   to='/doctors' 
                   className='flex items-center justify-center w-[44px] h-[44px] text-lg border border-solid border-[#181A1E] mt-[30px] mx-auto
                   group hover:bg-primaryColor hover:border-none'
                 >
                  <BsArrowRight className='group-hover:text-white w-6 h-5'/>
                 </Link>
              </div>
            </div>
            <div className='py-[38px] px-5'>
              <div className='flex items-center justify-center'>
                <img src={icon02} alt='Icon' />
              </div>
              <div className='py-[30px] px-5'>
                 <h2 className='text-[26px] leading-9 text-headingColor font-[700] text-center'>
                  Book Appointment
                 </h2>
                 <p className='text__para text-center'>
                  World-class care for everyone. Our health system offers 
                  unmatched, expert healthcare. From the lab to the clinic.
                 </p>
                 <Link
                   to='/doctors' 
                   className='flex items-center justify-center w-[44px] h-[44px] text-lg border border-solid border-[#181A1E] mt-[30px] mx-auto
                   group hover:bg-primaryColor hover:border-none'
                 >
                  <BsArrowRight className='group-hover:text-white w-6 h-5'/>
                 </Link>
              </div>
            </div>
            <div className='py-[38px] px-5'>
              <div className='flex items-center justify-center'>
                <img src={icon03} alt='Icon' />
              </div>
              <div className='py-[30px] px-5'>
                 <h2 className='text-[26px] leading-9 text-headingColor font-[700] text-center'>
                  Find Location
                 </h2>
                 <p className='text__para text-center'>
                  World-class care for everyone. Our health system offers 
                  unmatched, expert healthcare. From the lab to the clinic.
                 </p>
                 <Link
                   to='/doctors' 
                   className='flex items-center justify-center w-[44px] h-[44px] text-lg border border-solid border-[#181A1E] mt-[30px] mx-auto
                   group hover:bg-primaryColor hover:border-none'
                 >
                  <BsArrowRight className='group-hover:text-white w-6 h-5'/>
                 </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* about section start */}
      <About />
      {/* about section end */}

      {/* services section start */}
      <section>
        <div className='container'>
          <div className='xl:w-[470px] mx-auto'>
            <h2 className='heading text-center'>Our Medical Services</h2>
            <p className='text__para text-center'>
              World-class healthcare for everyone. Our health system offers unmatched, expert healthcare.
            </p>
          </div>
          <ServicesList />
        </div>
      </section>
      {/* services section end */}

      {/* feature section start */}
      <div className="container">
        <div className="flex">
          <div className="xl:w-[670px]">
            <h2 className="heading">
              Get virtual treatment <br /> anytime
            </h2>
            <ul className="pl-4">
              <li className="text__para text-xl"> 
                1. Schedule the appointment directly
              </li>
              <li className="text__para text-xl"> 
                2. Search for your physician here, and contact their services
              </li>
              <li className="text__para text-xl"> 
                3. View our physician who are accepting new patients, use the online scheduling
                tool to select the appointment time.
              </li>
            </ul>
            <Link to='/'>
              <button className='btn'>Learn More</button>
            </Link>
          </div>
          {/* Feature image */}
          <div className='relative z-10 xl:w-[770px] flex justify-end mt-[50px] lg:mt-0'>
            <img src={featureImg} className='w-full lg:w-3/4 rounded-lg shadow-lg' alt='Feature Image' />
            <div className='w-[150px] lg:w-[240px] bg-white absolute bottom-0 lg:bottom-[50px] left-0 lg:left-5 z-20 p-4 lg:p-6 rounded-lg shadow-md transform translate-y-1/2 lg:translate-y-0'>
              <div className='flex items-center justify-between mb-2'>
                <p className='text-[10px] leading-[18px] lg:text-[14px] lg:leading-5 text-headingColor font-semibold'>
                  Tue, 24
                </p>
                <p className='text-[10px] leading-[18px] lg:text-[14px] lg:leading-5 text-textColor font-medium'>
                  10:00 AM
                </p>
              </div>
              <div className='flex items-center justify-center mb-2'>
                <span className='w-5 h-5 lg:w-8 lg:h-8 flex items-center justify-center bg-yellowColor rounded-full'>
                  <img src={videoIcon} alt='Video Icon' className='w-3 h-3 lg:w-5 lg:h-5' />
                </span>
              </div>
              <div className='w-full text-center bg-[#CCF0F3] py-1 px-2 lg:py-2 lg:px-4 text-[10px] lg:text-[12px] leading-4 text-irisBlueColor font-medium rounded'>
                Consultation
              </div>
              <div className='flex items-center mt-2'>
                <img src={avatarIcon} alt='Avatar' className='w-8 h-8 lg:w-12 lg:h-12 rounded-full' />
                <h4 className='text-[10px] leading-3 lg:text-[16px] lg:leading-[22px] font-bold text-headingColor ml-2'>
                  Rashid Kimani
                </h4>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* feature section end */}
      <section>
        {/* Our great Doctors*/}
        <div className='container'>
          <div className='xl:w-[470px] mx-auto'>
            <h2 className='heading text-center '>Our Great Doctors</h2>
            <p className='text__para text-center '>
              World-class healthcare for everyone. Our health system offers unmatched, expert healthcare.
            </p>
          </div>
          <DoctorList />
          </div>
          {/* Our great Doctors*/}
      </section>
      {/* faq questions*/}
      <section>
        <div className='container'>
          <div className='flex justify-between gap-[50px] lg:gap-0'>
            <div className='w-1/2 hidden md:block'>
              <img src={faqImg} alt=''/>
            </div>
            <div className='w-full md:w-1/2'>
            <h2 className='heading'>
            Frequently Asked Questions
            </h2>
            <FaqList />
            </div>
          </div>
        </div>
      </section>
      {/* faq questions end*/}
      {/* testimonial */}
      <section>
      <div className="container">
      <div className='container'>
          <div className='xl:w-[470px] mx-auto'>
            <h2 className='heading text-center '>What Our Patients Say</h2>
            <p className='text__para text-center '>
              World-class healthcare for everyone. Our health system offers unmatched, expert healthcare.
            </p>
        </div>
        </div>
        <Testimonial/>
        </div>
      </section>
      {/* testimonial end*/}
      
        
     
      {/* home page end */}
    </section>
    
  );
};

export default Home;
