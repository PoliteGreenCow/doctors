import React from 'react'
import { formateDate } from '../../utils/formateDate'

const DoctorAbout = () => {
  return (
    <div>
        <div>
            <h3 className='text-[20px] leading-[30px] text-headingColor font-semibold flex items-center gap-2'>
                About of
                <span className='text-irisBlueColor font-bold text-[24px] leading-9'>
                  Samuel David
                </span>
            </h3>
            <p className='text__para'>
                Welcome to our hospital! Your health is our priority. 
                Schedule your appointment today for personalized care.
            </p>
        </div>
        <div className='mt-12'>
          <h3 className='text-[20px] leading-[30px] text-headingColor font-semibold'>Education</h3>

          <ul className='pt-4 md:p-5'>
            <li className='flex flex-col sm:flex-row sm:justify-between sm:items-end md:gap-5 mb-[30px]'>
              <div>
                <span className='text-irisBlueColor text -[15px] leading-6 font-semibold'>{formateDate("12-04-2010")} - {formateDate("12-04-2010")}</span>
                <p className='text-[16px] leading-6 font-medium text-textColor'>PHD in Surgeon</p>
              </div>
              <p className='text-[16px] leading-6 font-medium text-textColor'>Aga Khan Hospital</p>
            </li>
            <li className='flex flex-col sm:flex-row sm:justify-between sm:items-end md:gap-5 mb-[30px]'>
              <div>
                <span className='text-irisBlueColor text -[15px] leading-6 font-semibold'>{formateDate("12-04-2010")} - {formateDate("12-04-2010")}</span>
                <p className='text-[16px] leading-6 font-medium text-textColor'>PHD in Surgeon</p>
              </div>
              <p className='text-[16px] leading-6 font-medium text-textColor'>Aga Khan Hospital</p>
            </li>
          </ul>
        </div>
        
        <div>
          <h3></h3>
        </div>
        <h3 className='text-[20px] leading-[30px] text-headingColor font-semibold'>Experience</h3>

        <ul className='grid sm:grid-cols-2 gap-[30px] pt-4 md:p-5'>
          <li className='p-4 rounded bg-[#ff9ea]'>
            <span className='text-yellowColor text-[15px] leading-6 font-semibold'>
              {formateDate("12-04-2010")} - {formateDate("12-05-2012")}
            </span>
            <p className='text-[16px] leading-6 font-medium text-textColor'>Sr. Surgeon</p>
          </li>

          <li className='p-4 rounded bg-[#ff9ea]'>
            <span className='text-yellowColor text-[15px] leading-6 font-semibold'>
              {formateDate("12-04-2010")} - {formateDate("12-05-2012")}
            </span>
            <p className='text-[16px] leading-6 font-medium text-textColor'>Sr. Surgeon</p>
          </li>
        </ul>
    </div>
  )
}

export default DoctorAbout
