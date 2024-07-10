import User from '../models/UserSchema.js'
import Doctor from '../models/DoctorSchema.js'
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'

const generateToken = user =>{
    return jwt.sign({id:user._id, role:user.role}, process.env.JWT_SECRET_KEY,
        {expiresIn:'30d'})
     
}

export const register = async(req, res) => {
    
    const {email, password, name, role, photo, gender} = req.body

    try { 
       let user = null 
       if(role === 'patient') {
        user = await User.findOne({email})
    } else if(role === 'doctor') {
        user = await Doctor.findOne({email})
    }

// Checks if user exists
    if(user){
        return res.status(400).json({msg: 'User already exists.'})
    }

    // hash password
    const salt =await bcrypt.genSalt(10)
    const hashPassword = await bcrypt.hash(password, salt)

    if(role==='patient'){
        user = new User({
            name,
            email,
            password: hashPassword,
            photo,
            gender,
            role
        })
    }
    if(role==='doctor'){
        user = new Doctor({
            name,
            email,
            password: hashPassword,
            photo,
            gender,
            role
        })
    }
    await user.save()
    res.status(200).json({success:true, message: "User successfully created"})

    }catch(err){
        res.status(500).json({success:false, message: "Internal server error, Please try again"})
    }
}
export const login = async (req, res) => {
    const { email, password } = req.body;
    try {
      // Find user in either Patient or Doctor collection
      const patient = await User.findOne({ email });
      const doctor = await Doctor.findOne({ email });
      
      const user = patient || doctor;
  
      // Check if user exists
      if (!user) {
        return res.status(404).json({ message: "User not found" });
      }
  
      // Compare password
      const isPasswordMatch = await bcrypt.compare(password, user.password);
  
      if (!isPasswordMatch) {
        return res.status(400).json({ status: false, message: "Invalid credentials" });
      }
  
      // Generate token
      const token = generateToken(user);
  
      // Log token payload for debugging
      console.log('Token payload:', jwt.decode(token));
  
      const { password: _, role, appointment, ...rest } = user._doc;
  
      res.status(200).json({
        status: true,
        message: "Login successful",
        token,
        data: { ...rest, id: user._id },
        role
      });
  
    } catch (err) {
      console.error('Login error:', err);
      res.status(500).json({ status: false, message: "Failed to log in" });
    }
  };