import React from 'react';
import { doctors } from '../../assets/data/doctors';
import DoctorCard from './DoctorCard';
import useFetchData from '../../hooks/useFetchData';
import Loader from '../../components/Loader/Loader'
import Error from '../../components/Error/Error'
import { BASE_URL } from '../../config';

const DoctorList = () => {

  const { data:doctors, loading, error } = useFetchData(`${BASE_URL}/doctors`)
  return (
    <>
    {loading && <Loader/>}
    {error && <Error /> }
    {!loading &&!error && <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 lg:gap-10 mt-8'>
      {doctors.map((doctor) => (
        <DoctorCard key={doctor._id} doctor={doctor} />
      ))}
    </div>}
    </>
  );
};

export default DoctorList;
