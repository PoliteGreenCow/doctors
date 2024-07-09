import React, { useState } from 'react';
import doctorImg from '../../assets/images/doctor-img02.png';
import starIcon from '../../assets/images/Star.png';
import DoctorAbout from './DoctorAbout';
import Feedback from './Feedback';
import SidePanel from './SidePanel';
const DoctorsDetails = () => {
  const [tab, setTab] = useState('about');

  return (
    <>
      <section>
        <div className='max-w-[1170px] px-5 mx-auto'>
          <div className='grid md:grid-cols-3 gap-[50px]'>
            <div className='md:col-span-2'>
              <div className='flex items-center gap-5'>
                <figure className='max-w-[200px] max-h-[280px]'>
                  <img src={doctorImg} alt="doctor" />
                </figure>
                <div>
                  <span className='bg-[#CCF0F3] text-irisBlueColor py-1 px-6 lg:py-2 lg:px-6 text-[12px] leading-4 lg:text-[16px] lg:leading-7 font-semibold rounde'>
                    Surgeon
                  </span>
                  <h3 className='text-hedingColor text-[22px] leading-9 mt-3 font-bold'>
                    Samuel David
                  </h3>
                  <div className='flex items-center gap-[6px]'>
                    <span className='flex items-center gap-[6px] text-[14px] leading-5 lg:text-[16px] lg:leading-5 lg:text-[16px] lg:leading-7 font-semibold text-headingColor'>
                      <img src={starIcon} alt="" />4.8
                    </span>
                    <span className='flex items-center gap-[6px] text-[14px] leading-5 lg:text-[16px] lg:leading-5 lg:text-[16px] lg:leading-7 font-semibold text-textColor'>
                      (272)
                    </span>
                  </div>
                  <p className='text__para text-[14px] leading-5 md:text-[15px] lg:max-w-[390px]'>
                    "Welcome to our hospital! Your health is our priority. Schedule your appointment today for personalized care."
                  </p>
                </div>
              </div>
              <div className='mt-[50px] border-b boder-solid border-[#0066ff34]'>
                <button
                  onClick={() => setTab('about')}
                  className={`${
                    tab === 'about' ? 'border-b border-solid border-primaryColor' : ''
                  } py px-5 mx-5 text-[16px] leading-7 text-headingColor font-semibold`}
                >
                  About
                </button>
                <button
                  onClick={() => setTab('feedback')}
                  className={`${
                    tab === 'feedback' ? 'border-b border-solid border-primaryColor' : ''
                  } py px-5 mx-5 text-[16px] leading-7 text-headingColor font-semibold`}
                >
                  Feedback
                </button>
              </div>
              <div className='mt-[50px]'>
                {tab === 'about' && <DoctorAbout />}
                {tab === 'feedback' && <Feedback />}
              </div>
            </div>

            <div>
              <SidePanel />
            </div>

          </div>
        </div>
      </section>
    </>
  );
}

export default DoctorsDetails;
