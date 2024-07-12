import React from "react";
import useFetchData from "../../hooks/useFetchData";
import { BASE_URL } from "../../config";
import DoctorCard from "../../components/Doctors/DoctorCard";
import Loading from "../../components/Loader/Loader";
import Error from "../../components/Error/Error";

const MyBookings = () => {
  const userString = localStorage.getItem("user");
  let user;

  try {
    user = JSON.parse(userString);
  } catch (error) {
    console.error("Failed to parse user data from localStorage:", error);
    return <Error errMessage="Failed to load user data. Please try logging in again." />;
  }

  if (!user || !user._id) {
    return <Error errMessage="User data is missing or invalid. Please try logging in again." />;
  }

  const {
    data: appointments,
    loading,
    error,
  } = useFetchData(`${BASE_URL}/bookings/user/${user._id}`);

  return (
    <div>
      {loading && <Loading />}
      {error && !loading && <Error errMessage={error} />}
      {!loading && !error && (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
          {appointments && appointments.length > 0 ? (
            appointments.map((appointment) => (
              <AppointmentCard appointment={appointment} key={appointment._id} />
            ))
          ) : (
            <h2 className="mt-5 text-center text-headingColor leading-7 text-[20px] font-semibold text-primaryColor">
              You have not booked any appointments yet!
            </h2>
          )}
        </div>
      )}
    </div>
  );
};

const AppointmentCard = ({ appointment }) => {
  if (!appointment || !appointment.doctor) {
    return <div className="p-4 border rounded-lg shadow-md">Invalid appointment data</div>;
  }

  return (
    <div className="p-4 border rounded-lg shadow-md">
      <h3 className="text-lg font-semibold">{appointment.doctor.name}</h3>
      <p>Appointment Date: {new Date(appointment.appointmentDate).toLocaleDateString()}</p>
      <p>Appointment Time: {appointment.appointmentTime}</p>
      <p>Status: {appointment.status}</p>
      <p>Ticket Price: ${appointment.ticketPrice}</p>
    </div>
  );
};

export default MyBookings;