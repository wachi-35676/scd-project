import React from "react";
import { useState, useEffect } from "react";
import Axios from "axios";
// const Axios = require("./lib/axios.js");

import Header from "../../components/Header/Header";
import Summary from "../../components/Summary/Summary";

import { RiRunLine } from "react-icons/ri";

function Exercise() {
  //map exercise model through backend
  const [exerciseName, setExerciseName] = useState("");
  const [exerciseDescription, setExerciseDescription] = useState("");
  const [exerciseDuration, setExerciseDuration] = useState(0);
  const [exerciseDate, setExerciseDate] = useState(new Date());
  const [exerciseList, setExerciseList] = useState([]);
  
  useEffect(() => {
    Axios.get("http://localhost:3001/exercises/exercises").then((response) => {
      setExerciseList(response.data);
    });
  }, []);

  const createExercise = () => {
    Axios.post("http://localhost:3001/exercises/create", {
      exerciseName: exerciseName,
      exerciseDescription: exerciseDescription,
      exerciseDuration: exerciseDuration,
      exerciseDate: exerciseDate,
      caloriesBurned: exerciseDuration * 5,
    }).then(() => {
      setExerciseList([
        ...exerciseList,
        {
          exerciseName: exerciseName,
          exerciseDescription: exerciseDescription,
          exerciseDuration: exerciseDuration,
          exerciseDate: exerciseDate,
          caloriesBurned: exerciseDuration * 5,
        },
      ]);
    });
  };


  return (
    <div className="ExercisePage" data-testid="ExercisePage">

        <Header pageName="Exercise Tracker" />

        <div className="Summaries" data-testid="Summaries">
          <Summary MainIcon={<RiRunLine/>} Heading = "Calories Burned" SubHeading = "This Week Goal: 100" Progress={60}/>
        </div>

        <div className="ExercisesDisplay">
          {exerciseList.map((val, key) => {
            return (
              <div className="exercise">
                <h3>Name: {val.exerciseName}</h3>
                <p>Description: {val.exerciseDescription}</p>
                <p>Duration (min): {val.exerciseDuration}</p>
                <p>Date: {val.exerciseDate}</p>
                <p>Calories Burned: {val.caloriesBurned}</p>
              </div>
            );
          })}
        </div>

        <div className="ExerciseForm" data-testid="ExerciseForm">
          <label>Exercise Name</label>
          <input
            type="text"
            onChange={(event) => {
              setExerciseName(event.target.value);
            }}
          />
          <br/>
          <label>Exercise Description</label>
          <input
            type="text"
            onChange={(event) => {
              setExerciseDescription(event.target.value);
            }}
          />
          <br/>
          <label>Exercise Duration</label>
          <input
            type="number"
            onChange={(event) => {
              setExerciseDuration(event.target.value);
            }}
          />
          <br/>
          <label>Exercise Date</label>
          <input
            type="date"
            onChange={(event) => {
              setExerciseDate(event.target.value);
            }}
          />
          <br/>
          <button onClick={createExercise}>Add Exercise</button>
        </div>
    </div>
  );
}

export default Exercise;