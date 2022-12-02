const Exercise = require('../models/exercise');
const mongoose = require('mongoose');

exports.createExercise = (req, res) => {
    const {exerciseName, exerciseDescription, exerciseDuration, exerciseDate, caloriesBurned} = req.body;
    const exercise = new Exercise({exerciseName, exerciseDescription, exerciseDuration, exerciseDate, caloriesBurned});
    exercise.save((err, exercise) => {
        if(err) {
            return res.status(400).json({
                err: "Not able to save exercise in DB"
            });
        }
        res.json({
            exerciseName: exercise.exerciseName,
            exerciseDescription: exercise.exerciseDescription,
            exerciseDuration: exercise.exerciseDuration,
            exerciseDate: exercise.exerciseDate,
            caloriesBurned: exercise.caloriesBurned
        });
    });
};

exports.getExercise = (req, res) => {
    return res.json(req.exercise);
}

exports.getAllExercises = (req, res) => {
    Exercise.find().exec((err, exercises) => {
        if(err) {
            return res.status(400).json({
                err: "No exercises found"
            });
        }
        res.json(exercises);
    });
}

exports.updateExercise = (req, res) => {
    const exercise = req.exercise;
    exercise.exerciseName = req.body.exerciseName;
    exercise.exerciseDescription = req.body.exerciseDescription;
    exercise.exerciseDuration = req.body.exerciseDuration;
    exercise.exerciseDate = req.body.exerciseDate;
    exercise.save((err, updatedExercise) => {
        if(err) {
            return res.status(400).json({
                err: "Failed to update exercise"
            });
        }
        res.json(updatedExercise);
    });
}

exports.deleteExercise = (req, res) => {
    const exercise = req.exercise;
    exercise.remove((err, exercise) => {
        if(err) {
            return res.status(400).json({
                err: "Failed to delete exercise"
            });
        }
        res.json({
            message: "Exercise deleted successfully"
        });
    });
}