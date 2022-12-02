const express = require('express');
const router = express.Router();

const {getExerciseById, createExercise, getExercise, getAllExercises, updateExercise, deleteExercise} = require('../controllers/exercise');

router.get('/exercise/:exerciseId', getExercise);
router.get('/exercises', getAllExercises);
router.post('/create', createExercise);
router.put('/exercise/:exerciseId', updateExercise);
router.delete('/exercise/:exerciseId', deleteExercise);

module.exports = router;