import React  from 'react'
import Loader from '../../components/Loader/Loader'
import Error from '../../components/Error/Error'
import useGetProfile from '../../hooks/useFetchData'
import { BASE_URL } from '../../config'
import Tab from '../../Dashboard/doctor-account/Tabs'
import { useState } from 'react'
import starIcon from '../../assets/images/Star.png'
import DoctorAbout from '../../pages/Doctors/DoctorAbout'
import Profile from './Profile'
import Appointment from './Appointments'

const DoctorAccount = () => {

    const {data,loading, error} = useGetProfile(`${BASE_URL}/doctors/profile/me`)
    console.log('data', data._id)
    const [tab,setTab] = useState('overview')
    return <section>
        <div className='max-w-[1170px] px-5 mx-auto'>
            {loading && !error && <Loader />}
            {error && !loading && <Error />}

            {
                !loading && !error && (
                    <div className='grid lg:grid-cols-3 gap-[30px] lg:gap-[50px]'>
                        <Tab tab={tab} setTab={setTab}/>
                        <div className='lg:col-span-2'>
                            {data.isApproved === 'pending' && (
                                <div className='flex p-4 mb-4 text-yellow-800 bg-yellow-50 rounded-lg'>
                                  
                                    <span className='sr-only'>Info</span>
                                    <div className='ml-3 text-sm font-medium'> To get approval please complete your profile. We will review manually and approve within 3days.</div>


                                </div>
                            )}

                            <div className='mt-8'>
                              
                                {tab === 'overview' &&
                                 <div className='flex items-center gap-4 mb-10'> 
                                 <figure>
                                    <img src={data ?.photo} alt="" className='w-full'/>
                                 </figure>

                                 <div>
                                    <span className='bg-[#ccf0f3] text-irisBlueColor py-1 px-4 lg:py-2 lg:px-6 rounded-md text-[12px] loeading-4 lg:text-[16px] lg:leading-6 font-semibold'>
                                        {data.specilization}
                                    </span>
                                    <h3 className='text-[22px] leading-9 font-bold text-headingColor mt-3'>
                                        {data.name}
                                    </h3>
                                    <div className='flex items-centr gatp-[6px]'>
                                        <span className='flex items-center gap-[6px] text-headingColor text-[14px] leading-5 lg:text-[16px] lg:leading-6 font-semibold'>
                                            <img src={starIcon} alt="" /> {data.averageRating}
                                        </span>
                                        <span className='flex items-center gap-[6px] text-headingColor text-[14px] leading-5 lg:text-[16px] lg:leading-6 font-semibold'>
                                             ({data.totalRating})
                                        </span>
                                    </div>
                                    <p>{data?.bio}</p>
                                 </div>
                                 <DoctorAbout name={data.name} about={data.about} qualifications={data.qualifications} experiences={data.experiences} />
                                 </div>
                                 }
                            </div>

                        {tab === "appointments" && <div><Appointment doctor={data} /></div>}
                        {tab === "settings" && <div><Profile  doctorData={data}/></div>}
                        </div>
                    </div>
                )
            }
        </div>
    </section>
}

export default DoctorAccount