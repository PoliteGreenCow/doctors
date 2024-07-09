import express from 'express'

import {updateDoctor, deleteDoctor, getAllDoctor, getSingleDoctor } from '../Controllers/doctorControllers.js'

const router = express.Router()

import { authenticate  } from '../auth/verifyToken.js'

import reviewRouter from './reviewRoutes.js'

// nested route
router.use("/:doctorId/reviews", reviewRouter)

router.get('/:id', getSingleDoctor)
router.get('/', getAllDoctor)
router.put('/:id',authenticate,  updateDoctor)
router.delete('/:id', authenticate,  deleteDoctor)

export default router


// restrict(['doctor']), restrict(['doctor']), restrict