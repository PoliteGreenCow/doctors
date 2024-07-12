import React from 'react';
import { Link } from 'react-router-dom';
import { BsArrowRight } from 'react-icons/bs';

const ServiceCard = ({ item, index }) => {
  const { name, desc, bgColor, textColor } = item;

  return (
    <div className='py-6 px-3 lg:px-5'>
      <h2 className='text-xl lg:text-2xl leading-7 text-headingColor font-semibold'>
        {name}
      </h2>
      <p className='text-base lg:text-lg leading-6 text-textColor mt-2 lg:mt-3'>
        {desc}
      </p>

      <div className='flex items-center justify-between mt-4 lg:mt-5'>
      <Link
           to='/doctors' 
          className='flex items-center justify-center w-[44px] h-[44px] text-lg border border-solid border-[#181A1E] mt-[30px] mx-auto
          group hover:bg-primaryColor hover:border-none rounded-full'
          >
          <BsArrowRight className='group-hover:text-white w-6 h-5'/>
          </Link>
        <span 
          className='w-9 h-9 lg:w-10 lg:h-10 flex items-center justify-center text-sm lg:text-base leading-9 lg:leading-10 font-semibold'
          style={{
            backgroundColor: bgColor,
            color: textColor,
            borderRadius: '6px 0 0 6px'
          }}>
          {index + 1}
        </span>
      </div>
    </div>
  );
};

export default ServiceCard;
