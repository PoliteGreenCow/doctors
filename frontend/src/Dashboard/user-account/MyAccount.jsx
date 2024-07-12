import { useContext, useState } from "react";
import { authContext } from "../../Context/authContext";

import MyBookings from "./MyBookings";
import Profile from "./Profile";
import useGetProfile from '../../hooks/useFetchData';
import { BASE_URL } from "../../config";
import Loading from "../../components/Loader/Loader";
import Error from "../../components/Error/Error";

const MyAccount = () => {
    const { dispatch } = useContext(authContext);
    const [tab, setTab] = useState('bookings');

    const { data: userData, loading, error } = useGetProfile(`${BASE_URL}/users/profile/me`);

    const handleLogout = () => {
        dispatch({ type: 'LOGOUT' });
        localStorage.removeItem('token')
    };
    

    return (
        <div className="max-w-[1170px] px-5 mx-auto">
            {loading && <Loading />}
            {error && !loading && <Error errMessage={error.message} />}
            {
                !loading && !error && userData && (
                    <div className="grid md:grid-cols-3 gap-10">
                        <div className="px-[50px] px-[30px] rounded-md">
                            <div className="flex items-center justify-center">
                                <figure className="w-[100px] h-[100px] rounded-full border-2 border-solid border-primaryColor">
                                    <img src={userData.photo} alt="User" className="w-full h-full rounded-full" />
                                </figure>
                            </div>
                            <div className="text-center mt-4">
                                <h3 className="text-[18px] leading-[30px] text-headingColor font-bold">{userData.name}</h3>
                                <p className="text-textColor text-[15px] leading-6 font-medium">{userData.email}</p>
                                <p className="text-textColor text-[15px] leading-6 font-medium">
                                    Blood Type:
                                    <span className="ml-2 text-headingColor text-[22px] leading-8">{userData.bloodType}</span>
                                </p>
                            </div>
                            <div>
                                <button className="mt-[50px] w-full bg-[#181a1e] p-3 text-[16px] leading-7 rounded-md text-white" onClick={handleLogout}>
                                    Logout
                                </button>
                                <button className="w-full bg-red-600 p-3 text-[16px] leading-7 rounded-md text-white mt-[30px] mb-[30px]">
                                    Delete account
                                </button>
                            </div>
                        </div>
                        <div className="md:col-span-2 md:px-[30px]">
                            <div>
                                <button
                                    className={`p-2 mr-5 px-5 rounded-md text-[16px] leading-7 border border-solid border-primaryColor
                                        ${tab === 'bookings' ? 'bg-primaryColor text-white font-normal' : 'text-headingColor font-semibold'}`}
                                    onClick={() => setTab('bookings')}
                                >
                                    My Bookings
                                </button>
                                <button
                                    className={`p-2 mr-5 px-5 rounded-md text-[16px] leading-7 border border-solid border-primaryColor
                                        ${tab === 'settings' ? 'bg-primaryColor text-white font-normal' : 'text-headingColor font-semibold'}`}
                                    onClick={() => setTab('settings')}
                                >
                                    Profile Settings
                                </button>
                            </div>
                            {tab === 'bookings' && <MyBookings />}
                            {tab === 'settings' && <Profile user={userData} />}
                        </div>
                    </div>
                )
            }
        </div>
    );
}

export default MyAccount;
