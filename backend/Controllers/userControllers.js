import User from '../models/UserSchema.js'
import Booking from '../models/BookingSchema.js'
import Doctor from '../models/DoctorSchema.js'

// Update User
export const updateUser = async(req, res) => {
    const id = req.params.id

    try{
        const updatedUser = await User.findByIdAndUpdate(id, {$set:req.body}, {new:true})
        res.status(200).json({success:true, message:"Successfully updated", data:updatedUser})
    } catch(err) {
        res.status(500),json({ success:false, message:"Failed to update"})
    }
}

// Delete User
export const deleteUser = async(req, res) => {
    const id = req.params.id

    try{
        const updatedUser = await User.findByIdAndDelete(id)
        res.status(200).json({success:true, message:"Successfully deleted"})
    } catch(err) {
        res.status(500),json({ success:false, message:"Failed to delete"})
    }
}
// Get Single User
export const getSingleUser = async(req, res) => {
    const id = req.params.id

    try{
        const user = await User.findById(id, ).select("-password")
        res.status(200).json({success:true, message:"User found", data:user})
    } catch(err) {
        res.status(404),json({ success:false, message:"No user found"})
    }
}
// Get All Users
export const getAllUser = async(req, res) => {


    try{
        const user = await User.find({}).select("-password")
        res.status(200).json({success:true, message:"Users found", data:user})
    } catch(err) {
        res.status(404).json({ success:false, message:"Not found"})
    }
}

export const getUserProfile = async(req, res) => {
    const userId = req.userId

    console.log('Attempting to fetch user profile for userId:', userId);

    try {
        const user = await User.findById(userId)

        console.log('User lookup result:', user ? 'User found' : 'User not found');

        if(!user){
            console.log('User not found in database for userId:', userId);
            return res.status(404).json({success:false, message:"User not found"})
        }

        const {password, ...rest} = user._doc

        console.log('Sending user profile data');

        res
        .status(200)
        .json({
            success: true, 
            message: "Profile info is getting",
            data: { ...rest }
        })
    } catch(err) {
        console.error('Error in getUserProfile:', err);
        res.status(500).json({success:false, message: "Something went wrong, cannot get"})
    }
}


export const getMyAppointments = async(req, res) =>{
    try{
        // retrieve appointments from booking for specific user
        const bookings = await Booking.find({user:req.userId})

        // extract doctor ids from appointment bookings
        const doctorIds = bookings.map(el=>el.doctor.id)
        // retrieve doctors using extracted doctor ids
        const doctors = await Doctor.find({_id:{$in:doctorIds}}).select('-password')

        res.status(200).json({success:true, message:"Appointments are getting", data:doctors})
    } catch(err){
        res.status(500).json({success:false, message:"Something went wrong, cannot get appointments"})
    }
}