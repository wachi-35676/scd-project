const Routine = require('../models/routine');
const mongoose = require('mongoose');

exports.createRoutine = (req, res) => {
    const {routineName, routineDescription, exerciseGoalInCalories, dietGoalInCalories} = req.body;
    const routine = new Routine({routineName, routineDescription, exerciseGoalInCalories, dietGoalInCalories});
    routine.save((err, routine) => {
        if(err) {
            return res.status(400).json({
                err: "Not able to save routine in DB"
            });
        }
        res.json({
            routineName: routine.routineName,
            routineDescription: routine.routineDescription,
            exerciseGoalInCalories: routine.exerciseGoalInCalories,
            dietGoalInCalories: routine.dietGoalInCalories,
            id: routine._id
        });
    });
};

exports.getRoutine = (req, res) => {
    return res.json(req.routine);
}

exports.getAllRoutines = (req, res) => {
    Routine.find().exec((err, routines) => {
        if(err) {
            return res.status(400).json({
                err: "No routines found"
            });
        }
        res.json(routines);
    });
};

exports.updateRoutine = (req, res) => {
    const routine = req.routine;
    routine.routineName = req.body.routineName;
    routine.routineDescription = req.body.routineDescription;
    routine.exerciseGoalInCalories = req.body.exerciseGoalInCalories;
    routine.dietGoalInCalories = req.body.dietGoalInCalories;
    routine.save((err, updatedRoutine) => {
        if(err) {
            return res.status(400).json({
                err: "Failed to update routine"
            });
        }
        res.json(updatedRoutine);
    });
};

exports.deleteRoutine = (req, res) => {
    const routine = req.routine;
    routine.remove((err, routine) => {
        if(err) {
            return res.status(400).json({
                err: "Failed to delete routine"
            });
        }
        res.json({
            message: "Successfully deleted"
        });
    });
};

exports.routineById = (req, res, next, id) => {
    Routine.findById(id).exec((err, routine) => {
        if(err || !routine) {
            return res.status(400).json({
                err: "Routine not found"
            });
        }
        req.routine = routine;
        next();
    });
};

exports.isRoutineOwner = (req, res, next) => {
    let sameUser = req.routine && req.auth && req.routine.user._id == req.auth._id;
    let adminUser = req.routine && req.auth && req.auth.role === "admin";

    let isRoutineOwner = sameUser || adminUser;

    if(!isRoutineOwner) {
        return res.status(403).json({
            error: "User is not authorized to perform this action"
        });
    }
    next();
};

exports.routineByUser = (req, res) => {
    Routine.find({user: req.profile._id})
    .populate('user', '_id name')
    .sort('_created')
    .exec((err, routines) => {
        if(err) {
            return res.status(400).json({
                error: errorHandler(err)
            });
        }
        res.json(routines);
    });
};