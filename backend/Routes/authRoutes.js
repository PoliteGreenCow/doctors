import express from 'express'
import { register } from '../Controllers/authControllers.js'
import { login } from '../Controllers/authControllers.js'
const router = express.Router()

router.post('/register', register)
router.post('/login', login)

export default router