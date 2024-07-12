import React, { useState, useEffect } from 'react';
import { formateDate } from '../../utils/formateDate';
import { BASE_URL } from '../../config';

const Appointments = ({ doctor }) => {
  const [appointments, setAppointments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchAppointments = async () => {
      try {
        const response = await fetch(`${BASE_URL}/bookings/doctor/${doctor._id}`);
        if (!response.ok) {
          throw new Error('Failed to fetch appointments');
        }
        const data = await response.json();
        setAppointments(data);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchAppointments();
  }, [doctor._id]);
  console.log("appointments", appointments)
  console.log(doctor)
  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <table className="w-full text-left text-sm text-gray-500">
      <thead className="text-xs text-gray-700 uppercase bg-gray-50">
        <tr>
          <th scope="col" className="px-6 py-3">Name</th>
          <th scope="col" className="px-6 py-3">Email</th>
          <th scope="col" className="px-6 py-3">Status</th>
          <th scope="col" className="px-6 py-3">Ticket Price</th>
          <th scope="col" className="px-6 py-3">Booked on</th>
        </tr>
      </thead>
      <tbody>
        {appointments.map(item => (
          <tr key={item._id}>
            <th scope="row" className="flex items-center px-6 py-4 text-gray-900 whitespace-nowrap">
              <img src={item.user.photo} className="w-10 h-10 rounded-full" alt="" />
              <div className="pl-3">
                <div className="text-base font-semibold">{item.user.name}</div>
                <div className="text-normal text-gray-500">{item.user.email}</div>
              </div>
            </th>
            <td className="px-6 py-4">{item.user.email}</td>
            <td className="px-6 py-4">
              {item.isPaid ? (
                <div className="flex items-center">
                  <div className="h-2.5 w-2.5 rounded-full bg-green-500 mr-3"></div>Paid
                </div>
              ) : (
                <div className="flex items-center">
                  <div className="h-2.5 w-2.5 rounded-full bg-red-500 mr-3"></div>Unpaid
                </div>
              )}
            </td>
            <td className="px-6 py-4">{item.ticketPrice}</td>
            <td className="px-6 py-4">{formateDate(item.createdAt)}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Appointments;