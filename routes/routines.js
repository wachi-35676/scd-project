const express = require('express');
const router = express.Router();
const {createRoutine, getRoutine, getAllRoutines, updateRoutine, deleteRoutine} = require('../controllers/routine');

// router.post('/routine/create', createRoutine);
// router.get('/routine/:routineId', getRoutine);
// router.get('/routines', getAllRoutines);
// router.put('/routine/:routineId', updateRoutine);
// router.delete('/routine/:routineId', deleteRoutine);

module.exports = router;