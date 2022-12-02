const express = require('express');
const app = express();

const cors = require('cors');
app.use(cors());

const bodyParser = require('body-parser');
app.use(bodyParser.json());

const dotenv = require('dotenv');
dotenv.config();

const mongoose = require('mongoose');
mongoose.connect(process.env.MONGODB_URI);

//all routes
const users = require('./routes/users');
const diets = require('./routes/diets');
const exercises = require('./routes/exercises');
const routines = require('./routes/routines');
const bodyMeasurements = require('./routes/bodyMeasurements');

app.use('/users', users);
app.use('/diets', diets);
app.use('/exercises', exercises);
app.use('/routines', routines);
app.use('/bodyMeasurements', bodyMeasurements);

app.get('/', (req, res) => {
    res.send('Hello World!');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});