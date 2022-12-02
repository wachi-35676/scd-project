const mongoose = require('mongoose');

const routineSchema = new mongoose.Schema({
    routineName: {
        type: String,
        required: true
    },
    routineDescription: {
        type: String,
        required: true
    },
    exerciseGoalInCalories: {
        type: Number,
        required: true
    },
    dietGoalInCalories: {
        type: Number,
        required: true
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }
});

const Routine = mongoose.model('Routine', routineSchema);
module.exports = Routine;