import React, { useState } from 'react';
import './steps.css'

const Steps = () => {
    
    const [stepCount, setStepCount] = useState(0);
    const caloriesPerStep = 0.04;
  
    const updateSteps = () => {
      const inputSteps = parseInt(document.getElementById('step-input').value) || 0;
      setStepCount(inputSteps);
    };
  
    const updateCaloriesBurned = () => {
      return (stepCount * caloriesPerStep).toFixed(2);
    };
  
    const updateRecommendation = () => {
      if (stepCount < 5000) {
        return "You're off to a good start! Try to reach 10,000 steps today.";
      } else if (stepCount < 10000) {
        return "Great job! Keep moving to reach your daily goal.";
      } else {
        return "Amazing! You've hit your goal. Keep up the great work!";
      }
    };
  
    const updateDietPlan = () => {
      const caloriesBurned = stepCount * caloriesPerStep;
      if (caloriesBurned < 200) {
        return "Consider a light diet today. Focus on fruits and vegetables.";
      } else if (caloriesBurned < 400) {
        return "A balanced diet with lean proteins, whole grains, and veggies would be ideal.";
      } else if (caloriesBurned < 600) {
        return "You’ve burned a good amount of calories. You can include a moderate portion of carbs.";
      } else {
        return "You've been very active! Consider a diet rich in proteins and carbs to replenish energy.";
      }
    };
  
    return (
      <div className="steps-container">
        <h1 className="steps-h1">Step Count Tracker</h1>
        <div className="step-count-display">
          <p>
            Today's Steps: <span id="step-count">{stepCount}</span>
            <span className="steps-icon">👟</span>
          </p>
        </div>
        <div className="calories-burned">
          <p>
            Calories Burned: <span id="calories-burned">{updateCaloriesBurned()}</span> kcal
            <span className="steps-icon">🔥</span>
          </p>
        </div>
        <div className="diet-plan">
          <h2 className='steps-h2'>Diet Plan Recommendation</h2>
          <p id="diet-recommendation">{updateDietPlan()}</p>
        </div>
        <div className="recommendation">
          <h2 className='steps-h2'>Health Recommendation</h2>
          <p id="health-recommendation">{updateRecommendation()}</p>
        </div>
        <input type="number" id="step-input" placeholder="Enter today's steps" />
        <button className='steps-button' onClick={updateSteps}>Update Steps</button>
      </div>
    );
};

export default Steps;
