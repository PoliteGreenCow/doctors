import express from 'express';
import Booking from '../models/BookingSchema.js'; // Adjust the path as needed

const router = express.Router();

// Create a new booking
router.post('/', async (req, res) => {
  try {
    const booking = new Booking(req.body);
    await booking.save();
    res.status(201).send(booking);
  } catch (error) {
    res.status(400).send({ error: error.message });
  }
});

// Additional routes...

export default router;
