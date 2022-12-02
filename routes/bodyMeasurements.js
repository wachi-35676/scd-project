const express = require('express');
const router = express.Router();
const { createBodyMeasurement, getBodyMeasurementById, getBodyMeasurement, getAllBodyMeasurements, updateBodyMeasurement } = require('../controllers/bodyMeasurement');

// router.get('/bodyMeasurement/:bodyMeasurementId', getBodyMeasurement);
// router.get('/bodyMeasurements', getAllBodyMeasurements);
// router.post('/bodyMeasurement/create', createBodyMeasurement);
// router.put('/bodyMeasurement/:bodyMeasurementId', updateBodyMeasurement);

// router.param('bodyMeasurementId', getBodyMeasurementById);

module.exports = router;