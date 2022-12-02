const mongoose = require('mongoose');

const bodyMeasurementSchema = mongoose.Schema({
    height: { type: Number, required: true },
    weight: { type: Number, required: true },
    waist: { type: Number, required: true },
    hips: { type: Number, required: true },
    chest: { type: Number, required: true },
    neck: { type: Number, required: true },
    biceps: { type: Number, required: true },
    forearms: { type: Number, required: true },
    thighs: { type: Number, required: true },
    calves: { type: Number, required: true },
    date: { type: Date, required: true },
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true }
});

const BodyMeasurement = mongoose.model('BodyMeasurement', bodyMeasurementSchema);
module.exports = BodyMeasurement;