const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

// Sample data to store rooms and bookings
const rooms = [];
const bookings = [];

// API to create a Room
app.post('/create-room', (req, res) => {
  const roomData = req.body;
  rooms.push(roomData);
  res.status(201).json({ message: 'Room created successfully' });
});

// API to book a Room
app.post('/book-room', (req, res) => {
  const bookingData = req.body;
  // Check room availability (you may want to add more checks)
  const room = rooms.find(room => room.id === bookingData.roomId);
  if (!room) {
    return res.status(404).json({ message: 'Room not found' });
  }
  const overlappingBooking = bookings.find(booking => 
    booking.roomId === bookingData.roomId &&
    booking.date === bookingData.date &&
    (
      (booking.startTime <= bookingData.startTime && booking.endTime >= bookingData.startTime) ||
      (booking.startTime <= bookingData.endTime && booking.endTime >= bookingData.endTime)
    )
  );
  if (overlappingBooking) {
    return res.status(400).json({ message: 'Room already booked for this time slot' });
  }
  // If room is available, create a booking
  bookings.push(bookingData);
  res.status(201).json({ message: 'Room booked successfully' });
});

// API to list all Rooms with Booked Data
app.get('/list-rooms', (req, res) => {
  const roomsWithBookings = rooms.map(room => {
    const roomBookings = bookings.filter(booking => booking.roomId === room.id);
    return {
      roomName: room.name,
      bookedStatus: roomBookings.length > 0 ? 'Booked' : 'Available',
      bookings: roomBookings,
    };
  });
  res.json(roomsWithBookings);
});

// API to list all customers with booked Data
app.get('/list-customers', (req, res) => {
  const customersWithBookings = bookings.map(booking => {
    const room = rooms.find(room => room.id === booking.roomId);
    return {
      customerName: booking.customerName,
      roomName: room ? room.name : '',
      date: booking.date,
      startTime: booking.startTime,
      endTime: booking.endTime,
    };
  });
  res.json(customersWithBookings);
});

// API to list how many times a customer has booked a room
app.get('/customer-booking-history/:customerName', (req, res) => {
  const customerName = req.params.customerName;
  const customerBookings = bookings.filter(booking => booking.customerName === customerName);
  res.json(customerBookings);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
