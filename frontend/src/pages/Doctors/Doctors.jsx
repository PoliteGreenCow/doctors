import React, { useState } from 'react';
import DoctorCard from '../../components/Doctors/DoctorCard';
import { doctors } from '../../assets/data/doctors';
import Testimonial from '../../components/Testimonial/Testimonial';
import useFetchData from '../../hooks/useFetchData';
import Loader from '../../components/Loader/Loader'
import Error from '../../components/Error/Error'
import { BASE_URL } from '../../config';

const Doctors = () => {
  const [query, setQuery] = useState('')
  
  const handleSearch =()=> {
    setQuery(query.trim())
    console.log('handle search')
  }
  
  const { data:doctors, loading, error } = useFetchData(`${BASE_URL}/doctors?query=${query}`)

  return (
    <>
    <section>
      <div className='bg-[#F4F8FB]'>
        <div className='container text-center py-8'>
          <h2 className='heading text-3xl font-bold'>Find a Doctor</h2>
          <div className='max-w-[570px] mt-[30px] mx-auto bg-gray-300 rounded-md flex items-center justify-between'>
            <input 
              className='py-4 pl-4 bg-transparent w-full focus:outline-none cursor-pointer placeholder:text-textColor'
              placeholder='Search doctor by name or specification'
              value={query}
              onChange={e=> setQuery(e.target.value)}
            />
            <button className='btn mt-0 rounded-[8px] rounded-r-md py-4 px-8' onClick={handleSearch}>
              Search 
              
            </button>
            </div>
            </div>
            </div>
            </section>
          <section>
            <div className='container'>
              {loading && <Loader/>}
              {error && <Error /> }
              {!loading&& !error && <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 '>
                {doctors.map((doctor) => (
                  <DoctorCard key={doctor.id} doctor={doctor} />
                ))}
              </div>}
            </div>
          </section>
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
    </>
  );
};

export default Doctors;
