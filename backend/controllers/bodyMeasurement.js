const BodyMeasurement = require('../models/bodyMeasurement');
const mongoose = require('mongoose');

exports.createBodyMeasurement = (req, res) => {
    const bodyMeasurement = new BodyMeasurement(req.body);
    bodyMeasurement.save((err, bodyMeasurement) => {
        if(err) {
            return res.status(400).json({
                err: "Not able to save body measurement in DB"
            });
        }
        res.json(bodyMeasurement);
    });
}

exports.getBodyMeasurementById = (req, res, next, id) => {
    BodyMeasurement.findById(id).exec((err, bodyMeasurement) => {
        if(err) {
            return res.status(400).json({
                err: "Body measurement not found in DB"
            });
        }
        req.bodyMeasurement = bodyMeasurement;
        next();
    });
}

exports.getBodyMeasurement = (req, res) => {
    return res.json(req.bodyMeasurement);
}

//get all body measurements for a specific user
exports.getAllBodyMeasurements = (req, res) => {
    BodyMeasurement.find({user: req.profile._id}).exec((err, bodyMeasurements) => {
        if(err) {
            return res.status(400).json({
                err: "No body measurements found in DB"
            });
        }
        res.json(bodyMeasurements);
    });
}

exports.updateBodyMeasurement = (req, res) => {
    const bodyMeasurement = req.bodyMeasurement;
    bodyMeasurement.height = req.body.height;
    bodyMeasurement.weight = req.body.weight;
    bodyMeasurement.waist = req.body.waist;
    bodyMeasurement.hips = req.body.hips;
    bodyMeasurement.chest = req.body.chest;
    bodyMeasurement.neck = req.body.neck;
    bodyMeasurement.biceps = req.body.biceps;
    bodyMeasurement.forearms = req.body.forearms;
    bodyMeasurement.thighs = req.body.thighs;
    bodyMeasurement.calves = req.body.calves;
    bodyMeasurement.save((err, updatedBodyMeasurement) => {
        if(err) {
            return res.status(400).json({
                err: "Failed to update body measurement"
            });
        }
        res.json(updatedBodyMeasurement);
    });
}

exports.removeBodyMeasurement = (req, res) => {
    const bodyMeasurement = req.bodyMeasurement;
    bodyMeasurement.remove((err, bodyMeasurement) => {
        if(err) {
            return res.status(400).json({
                err: "Failed to delete body measurement"
            });
        }
        res.json({
            message: "Successfully deleted body measurement"
        });
    });
}