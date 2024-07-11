import express from 'express';
import cookieParser from 'cookie-parser';
import cors from 'cors'
import mongoose from 'mongoose';
import dotenv from 'dotenv'
import authRoute from './Routes/authRoutes.js'
import userRoute from './Routes/userRoutes.js'
import doctorRoute from './Routes/doctorRoutes.js'
import reviewRoute from './Routes/reviewRoutes.js'
import bookingRoute from './Routes/bookingRoutes.js'


dotenv.config()

const app = express()
const port = process.env.PORT || 8000

const corsOptions = {
    origin: true
}

app.get('/', (req, res) => {
    res.send('API is working')
})


// database connection
mongoose.set('strictQuery', false)
const connectDB = async() => {
    try {
        mongoose.connect(process.env.MONGO_URL)
        console.log('MongoDB database is connected')
    } catch (err){
        console.log("MongoDB database connection failed")
    }
    
}

// middleware
app.use(express.json())
app.use(cookieParser())
app.use(cors(corsOptions))


app.use('/api/v1/auth', authRoute)
app.use('/api/v1/users', userRoute)
app.use('/api/v1/doctors',doctorRoute)
app.use('/api/v1/reviews', reviewRoute)
app.use('/api/v1/bookings', bookingRoute)




app.listen(port, () => {
    connectDB()
    console.log("Server is running on port" + port)
}) 