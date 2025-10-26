const getMockRideData = require('../controllers/rideController').getMockRideData;

const express = require('express');
const router = express.Router();

router.get('/rides', (req, res) => {
    res.json(getMockRideData());
});

module.exports = router;