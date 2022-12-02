const Diet = require('../models/diet');
const mongoose = require('mongoose');

exports.createDiet = (req, res) => {
    const diet = new Diet(req.body);
    diet.save((err, diet) => {
        if(err) {
            return res.status(400).json({
                err: "Not able to save diet in DB"
            });
        }
        res.json(diet);
    });
}

exports.getDietById = (req, res, next, id) => {
    Diet.findById(id).exec((err, diet) => {
        if(err) {
            return res.status(400).json({
                err: "Diet not found in DB"
            });
        }
        req.diet = diet;
        next();
    });
}

exports.getDiet = (req, res) => {
    return res.json(req.diet);
}

//get all diets for a specific user
exports.getAllDiets = (req, res) => {
    Diet.find({user: req.profile._id}).exec((err, diets) => {
        if(err) {
            return res.status(400).json({
                err: "No diets found in DB"
            });
        }
        res.json(diets);
    });
}

exports.updateDiet = (req, res) => {
    const diet = req.diet;
    diet.dietName = req.body.dietName;
    diet.dietDescription = req.body.dietDescription;
    diet.dietImage = req.body.dietImage;
    diet.dietCalories = req.body.dietCalories;
    diet.save((err, updatedDiet) => {
        if(err) {
            return res.status(400).json({
                err: "Failed to update diet"
            });
        }
        res.json(updatedDiet);
    });
}

exports.removeDiet = (req, res) => {
    const diet = req.diet;
    diet.remove((err, diet) => {
        if(err) {
            return res.status(400).json({
                err: "Failed to delete diet"
            });
        }
        res.json({
            message: "Successfully deleted"
        });
    });
}