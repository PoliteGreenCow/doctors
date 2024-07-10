import jwt from "jsonwebtoken";
import Doctor from "../models/DoctorSchema.js";
import User from "../models/UserSchema.js";

export const authenticate = async(req, res, next) => {

    console.log("Full headers:", JSON.stringify(req.headers, null, 2));
    console.log("Authorization header:", req.headers.authorization);
    // get token from headers
    const authToken = req.headers.authorization

    // check if token exists or not
    if(!authToken || !authToken.startsWith('Bearer ')){
        return res.status(401).json({success:false, message: "No token, authorization denied"})
    }
    try{
        const token = authToken.split(' ')[1]

        // verify token
        const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY )
        req.userId = decoded.id
        req.role = decoded.role

        next()
    } catch(err){
        if(err.name === 'TokenExpiredError'){
            return res.status(401).json({success:false, message: "Token expired, authorization denied"})
        }
        return res.status(401).json({success:false, message: 'Invalid token'})
    }
}

export const restrict = (roles) => {
    return async (req, res, next) => {
        try {
            const userId = req.userId;
            
            if (!userId) {
                return res.status(401).json({ success: false, message: "You are not authenticated" });
            }

            let user;
            // First, try to find the user in the User collection
            user = await User.findById(userId);
            
            // If not found in User, try Doctor collection
            if (!user) {
                user = await Doctor.findById(userId);
            }
            
            if (!user) {
                return res.status(404).json({ success: false, message: "User not found" });
            }
            
            if (!user.role) {
                return res.status(400).json({ success: false, message: "User role not defined" });
            }

            if (!roles.includes(user.role)) {
                return res.status(403).json({ success: false, message: "You're not authorized" });
            }
            
            next();
        } catch (error) {
            console.error('Error in restrict middleware:', error);
            res.status(500).json({ success: false, message: "Internal server error" });
        }
    };
};

// export const restrict = roles => async (req, res, next) => {
//     const userId = req.userId;
//     const userRole = req.role;

//     console.log(`User ID in restrict middleware: ${userId}`);
//     console.log(`User role in restrict middleware: ${userRole}`);

//     if (!userId) {
//         return res.status(400).json({ success: false, message: "User ID not provided" });
//     }

//     let user;

//     try {
//         const patient = await User.findById(userId);
//         const doctor = await Doctor.findById(userId);

//         if (patient) {
//             user = patient;
//         } else if (doctor) {
//             user = doctor;
//         } else {
//             console.log(`User not found: ID ${userId}`);
//             return res.status(404).json({ success: false, message: "User not found" });
//         }

//         if (!roles.includes(user.role)) {
//             return res.status(401).json({ success: false, message: "You are not authorized" });
//         }

//         next();
//     } catch (error) {
//         console.error(`Error fetching user: ${error.message}`);
//         return res.status(500).json({ success: false, message: "Server error" });
//     }
// };