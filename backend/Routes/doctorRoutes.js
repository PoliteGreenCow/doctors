import express from 'express'

import {updateDoctor, deleteDoctor, getAllDoctor, getSingleDoctor, getDoctorProfile } from '../Controllers/doctorControllers.js'

const router = express.Router()

import { authenticate, restrict  } from '../auth/verifyToken.js'

import reviewRouter from './reviewRoutes.js'

// nested route
router.use("/:doctorId/reviews", reviewRouter)
router.get('/profile/me', authenticate, restrict(['doctor']), getDoctorProfile)
router.get('/:id', getSingleDoctor)
router.get('/', getAllDoctor)
router.put('/:id',authenticate, restrict(['doctor']), updateDoctor)
router.delete('/:id', authenticate, restrict(['doctor']), deleteDoctor)



export default router


// restrict(['doctor']), restrict(['doctor']), restrict