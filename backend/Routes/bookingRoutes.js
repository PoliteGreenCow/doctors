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

// Fetch all bookings
router.get('/', async (req, res) => {
  try {
    const bookings = await Booking.find().populate('doctor').populate('user');
    res.status(200).send(bookings);
  } catch (error) {
    res.status(400).send({ error: error.message });
  }
});

// Fetch a specific booking by ID
router.get('/:id', async (req, res) => {
  try {
    const booking = await Booking.findById(req.params.id).populate('doctor').populate('user');
    if (!booking) {
      return res.status(404).send({ error: 'Booking not found' });
    }
    res.status(200).send(booking);
  } catch (error) {
    res.status(400).send({ error: error.message });
  }
});

// Fetch bookings by doctor's ID
router.get('/doctor/:doctorId', async (req, res) => {
  try {
    const bookings = await Booking.find({ doctor: req.params.doctorId })
      .populate('doctor')
      .populate('user');
    res.status(200).send(bookings);
  } catch (error) {
    res.status(400).send({ error: error.message });
  }
});

router.get('/user/:userId', async (req, res) => {
    try {
      const bookings = await Booking.find({email: req.params.userIdentifier})
        .populate('doctor')
        .populate('user');
        console.log("Found Bookings:", bookings )
      res.status(200).json({ data: bookings });  // Note the use of json() instead of send()
    } catch (error) {
      console.error('Error fetching bookings for user:', error);
      res.status(400).json({ error: error.message });
    }
})

export default router;