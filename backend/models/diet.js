const mongoose = require('mongoose');

const dietSchema = new mongoose.Schema({
    dietName: {
        type: String,
        required: true,
    },
    dietDescription: {
        type: String,
        required: true,
    },
    dietImage: {
        type: String,
        required: true,
    },
    dietCalories: {
        type: Number,
        required: true,
    },
    date : {
        type: Date,
        default: Date.now
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }
});

const Diet = mongoose.model('Diet', dietSchema);
module.exports = Diet;