const mongoose = require('mongoose');

const exerciseSchema = new mongoose.Schema({
    exerciseName: {
        type: String,
        required: true
    },
    exerciseDescription: {
        type: String,
        required: true
    },
    exerciseDuration: {
        type: Number,
        required: true
    },
    exerciseDate: {
        type: Date,
        required: true
    },
    caloriesBurned: {
        type: Number,
        required: true
    }
});

const Exercise = mongoose.model('Exercise', exerciseSchema);
module.exports = Exercise;