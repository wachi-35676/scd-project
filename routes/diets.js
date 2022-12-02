const express = require('express');
const router = express.Router();
const {create, dietById, read, update, remove, list} = require('../controllers/diet');

// router.get('/diet/:dietId', read);
// router.post('/diet/create/:userId', create);
// router.put('/diet/:dietId/:userId', update);
// router.delete('/diet/:dietId/:userId', remove);
// router.get('/diets/:userId', list);

// router.param('dietId', dietById);

module.exports = router;