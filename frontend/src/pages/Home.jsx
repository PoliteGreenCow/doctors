import React from 'react';
import { Link } from 'react-router-dom';
import { BsArrowRight } from 'react-icons/bs';
import About from '../components/About/About';
import ServicesList from '../components/Services/ServiceList';
import DoctorList from '../components/Doctors/DoctorList';
import FaqList from '../components/faq/FaqsList';
import Testimonial from '../components/Testimonial/Testimonial';
import Booking from '../components/bookingAppointment';
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


const Home = () => {
  return (
    < div className="bg-[#F4F8FB]">
      <section className='hero__section pt-[40px] pb-[40px] px-[30px] lg:px-[50px] xl:px-[90px] 2xl:h-[800px] bg-[#F4F8FB]'>
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
              <Link to='/doctors/booking/:id'>
                <button className='btn mt-4 text-lg bg-primaryColor text-white font-semibold py-3 px-6 rounded-lg shadow-md hover:bg-primaryColorDark transition-colors duration-300'>
                  Book Appointment
                </button>
              </Link>
            </div>

            {/* Hero images */}
            <section className="flex flex-col lg:flex-row justify-between items-start lg:items-center">
            {/* Images on the Left */}
            <div className="flex flex-col justify-between lg:w-[300px]">
              <img src={heroImg02} alt="Image 2" className="w-full h-auto rounded-lg shadow-xl mb-6 lg:mb-4" />
              <img src={heroImg03} alt="Image 3" className="w-full h-auto rounded-lg shadow-xl" />
            </div>
            
            {/* Main Hero Image */}
            <div className="flex justify-end lg:w-[600px] lg:ml-4">
              <img src={heroImg01} alt="Hero Image" className="w-[200px] md:max-w-[500px] lg:max-w-none lg:w-[600px] h-auto lg:max-h-[calc(100%)] rounded-lg shadow-xl" />
            </div>
          </section>
          </div>
        </div>
      </section>

      {/* Additional Content */}
      <section className='py-[30px]'>
        <div className='container mx-auto'>
          <h2 className='heading text-center text-2xl lg:text-3xl mb-4'>
            Providing the best medical services :)
          </h2>
          <p className='text__para text-center text-lg lg:text-xl mb-8'>
            World-class healthcare for everyone. Our health system offers unmatched, expert healthcare.
          </p>

          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-[30px]'>
            {/* Service Blocks */}
            <div className='py-[38px] px-5 bg-white rounded-lg shadow-md'>
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
                  group hover:bg-primaryColor hover:border-none rounded-full'
                >
                  <BsArrowRight className='group-hover:text-white w-6 h-5'/>
                </Link>
              </div>
            </div>
            {/* End Service Block */}

            {/* Service Block */}
            <div className='py-[38px] px-5 bg-white rounded-lg shadow-md'>
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
                  to='/appointment' 
                  className='flex items-center justify-center w-[44px] h-[44px] text-lg border border-solid border-[#181A1E] mt-[30px] mx-auto
                  group hover:bg-primaryColor hover:border-none rounded-full'
                >
                  <BsArrowRight className='group-hover:text-white w-6 h-5'/>
                </Link>
              </div>
            </div>
            {/* End Service Block */}

            {/* Service Block */}
            <div className='py-[38px] px-5 bg-white rounded-lg shadow-md'>
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
                  to='/location' 
                  className='flex items-center justify-center w-[44px] h-[44px] text-lg border border-solid border-[#181A1E] mt-[30px] mx-auto
                  group hover:bg-primaryColor hover:border-none rounded-full'
                >
                  <BsArrowRight className='group-hover:text-white w-6 h-5'/>
                </Link>
              </div>
            </div>
            {/* End Service Block */}
          </div>
        </div>
      </section>

      {/* About Section */}
      <About />

      {/* Services Section */}
      <section className='py-[30px]'>
        <div className='container mx-auto'>
          <h2 className='heading text-center'>Our Medical Services</h2>
          <p className='text__para text-center'>
            World-class healthcare for everyone. Our health system offers unmatched, expert healthcare.
          </p>
          <ServicesList />
        </div>
      </section>

      {/* Feature Section */}
      <section className='py-[30px]'>
        <div className='container mx-auto'>
          <div className='flex flex-col lg:flex-row items-center justify-between'>
            <div className='lg:w-[50%]'>
              <h2 className='heading'>
                Get virtual treatment <br /> anytime
              </h2>
              <ul className='pl-4'>
                <li className='text__para text-xl'> 
                  1. Schedule the appointment directly
                </li>
                <li className='text__para text-xl'> 
                  2. Search for your physician here, and contact their services
                </li>
                <li className='text__para text-xl'> 
                  3. View our physician who are accepting new patients, use the online scheduling
                  tool to select the appointment time.
                </li>
              </ul>
              <Link to='/about'>
              <button className="btn mt-4 p-2">Learn More</button>
              </Link>
            </div>

            <div className='relative lg:w-[50%] mt-6 lg:mt-0'>
              <img src={featureImg} className='w-full rounded-lg shadow-lg' alt='Feature Image' />
              <div className='w-[150px] bg-white absolute bottom-0 left-0 p-4 rounded-lg shadow-md transform -translate-y-1/2'>
                <div className='flex items-center justify-between mb-2'>
                  <p className='text-[10px] leading-[18px] font-semibold'>
                    Tue, 24
                  </p>
                  <p className='text-[10px] leading-[18px] font-medium'>
                    10:00 AM
                  </p>
                </div>
                <div className='flex items-center justify-center mb-2'>
                  <span className='w-5 h-5 flex items-center justify-center bg-yellowColor rounded-full'>
                    <img src={videoIcon} alt='Video Icon' className='w-3 h-3' />
                  </span>
                </div>
                <div className='w-full text-center bg-[#CCF0F3] py-1 px-2 text-[10px] leading-4 font-medium rounded'>
                  Consultation
                </div>
                <div className='flex items-center mt-2'>
                  <img src={avatarIcon} alt='Avatar' className='w-8 h-8 rounded-full' />
                  <h4 className='text-[10px] leading-3 font-bold ml-2'>
                    Claire Tunnings
                  </h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Doctors Section */}
      <section className='py-[30px]'>
        <div className='container mx-auto'>
          <h2 className='heading text-center'>Our Great Doctors</h2>
          <p className='text__para text-center'>
            World-class healthcare for everyone. Our health system offers unmatched, expert healthcare.
          </p>
          <DoctorList />
        </div>
      </section>

      {/* FAQ Section */}
      <section className='py-[30px]'>
        <div className='container mx-auto'>
          <div className='flex flex-col lg:flex-row gap-[50px]'>
            <div className='w-full lg:w-1/2 hidden md:block'>
              <img src={faqImg} alt='FAQ Image' className='w-[500px] h-auto rounded-lg shadow-lg' />
            </div>
            <div className='w-full lg:w-1/2'>
              <h2 className='heading'>
                Frequently Asked Questions
              </h2>
              <FaqList />
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className='py-[30px]'>
        <div className='container mx-auto'>
          <h2 className='heading text-center'>What Our Patients Say</h2>
          <p className='text__para text-center'>
            World-class healthcare for everyone. Our health system offers unmatched, expert healthcare.
          </p>
          <Testimonial />
        </div>
      </section>
    </div>
  );
};

export default Home;
