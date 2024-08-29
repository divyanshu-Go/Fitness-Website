import React, { useState } from "react";
import "./Calorie.css";

const Calorie = () => {
  const [calories, setCalories] = useState({
    maintainWeight: 0,
    mildWeightLoss: 0,
    weightLoss: 0,
    extremeWeightLoss: 0,
    mildWeightGain: 0,
    weightGain: 0,
    fastWeightGain: 0,
  });

  const [showWeightGain, setShowWeightGain] = useState(false);

  const calculateCalories = () => {
    const age = parseInt(document.getElementById("cc-age").value);
    const gender = document.getElementById("cc-gender").value;
    const height = parseFloat(document.getElementById("cc-height").value);
    const weight = parseFloat(document.getElementById("cc-weight").value);
    const activity = document.getElementById("cc-activity").value;
    const heightUnit = document.getElementById("cc-heightUnit").value;
    const weightUnit = document.getElementById("cc-weightUnit").value;

    const heightInCm = heightUnit === "inches" ? height * 2.54 : height;
    const weightInKg = weightUnit === "lbs" ? weight * 0.453592 : weight;

    let bmr;
    if (gender === "male") {
      bmr = 88.362 + 13.397 * weightInKg + 4.799 * heightInCm - 5.677 * age;
    } else {
      bmr = 447.593 + 9.247 * weightInKg + 3.098 * heightInCm - 4.33 * age;
    }

    let calories;
    switch (activity) {
      case "sedentary":
        calories = bmr * 1.2;
        break;
      case "light":
        calories = bmr * 1.375;
        break;
      case "moderate":
        calories = bmr * 1.55;
        break;
      case "active":
        calories = bmr * 1.725;
        break;
      case "very_active":
        calories = bmr * 1.9;
        break;
      case "extra_active":
        calories = bmr * 2.1;
        break;
      default:
        calories = bmr;
    }

    setCalories({
      maintainWeight: Math.round(calories),
      mildWeightLoss: Math.round(calories * 0.9),
      weightLoss: Math.round(calories * 0.8),
      extremeWeightLoss: Math.round(calories * 0.6),
      mildWeightGain: Math.round(calories * 1.1),
      weightGain: Math.round(calories * 1.2),
      fastWeightGain: Math.round(calories * 1.4),
    });
  };

  return (
    <div className="cc-container">
      <main>
        <img
          src="https://static.vecteezy.com/system/resources/previews/005/724/676/original/calorie-calculator-line-icon-count-calories-concept-linear-pictogram-calculate-kcal-for-healthy-nutrition-outline-icon-isolated-illustration-vector.jpg"
          alt="calculator"
          className="cc-img"
        />
        <h1>Calorie Calculator</h1>
        <form id="calorieForm">
          <div className="cc-input-group">
            <label htmlFor="age">Age</label>
            <input type="number" id="cc-age" name="age" required />
          </div>

          <div className="cc-input-group">
            <label htmlFor="gender">Gender</label>
            <select id="cc-gender" name="gender" required>
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
          </div>

          <div className="cc-input-group">
            <label htmlFor="height">Height</label>
            <input type="number" id="cc-height" name="height" required />
            <select id="cc-heightUnit">
              <option value="cm">cm</option>
              <option value="inches">inches</option>
            </select>
          </div>

          <div className="cc-input-group">
            <label htmlFor="weight">Weight</label>
            <input type="number" id="cc-weight" name="weight" required />
            <select id="cc-weightUnit">
              <option value="kg">kg</option>
              <option value="lbs">lbs</option>
            </select>
          </div>

          <div className="cc-input-group">
            <label htmlFor="activity">Activity Level</label>
            <select id="cc-activity" name="activity" required>
              <option value="sedentary">
                Sedentary: little or no exercise
              </option>
              <option value="light">Light: exercise 1-3 times/week</option>
              <option value="moderate">
                Moderate: exercise 4-5 times/week
              </option>
              <option value="active">
                Active: daily exercise or intense exercise 3-4 times/week
              </option>
              <option value="very_active">
                Very Active: intense exercise 6-7 times/week
              </option>
              <option value="extra_active">
                Extra Active: very intense exercise daily, or physical job
              </option>
            </select>
          </div>

          <button type="button" onClick={calculateCalories}>
            Calculate
          </button>
        </form>

        <div id="cc-resultSection" className="cc-result-section">
          <h2>Result</h2>
          <div id="calorieResults">
            <div className="cc-result-row">
              <div className="cc-result-box">
                <p>Maintain weight</p>
                <div id="maintainWeight" className="cc-calorie-box">
                  {calories.maintainWeight} <span>Calories/day</span>
                </div>
              </div>
              <div className="cc-result-box">
                <p>
                  Mild weight loss <span>(0.25 kg/week)</span>
                </p>
                <div id="mildWeightLoss" className="cc-calorie-box">
                  {calories.mildWeightLoss} <span>Calories/day</span>
                </div>
              </div>
              <div className="cc-result-box">
                <p>
                  Weight loss <span>(0.5 kg/week)</span>
                </p>
                <div id="weightLoss" className="cc-calorie-box">
                  {calories.weightLoss} <span>Calories/day</span>
                </div>
              </div>
              <div className="cc-result-box">
                <p>
                  Extreme weight loss <span>(1 kg/week)</span>
                </p>
                <div id="extremeWeightLoss" className="cc-calorie-box">
                  {calories.extremeWeightLoss} <span>Calories/day</span>
                </div>
              </div>
            </div>

            <p className="cc-disclaimer">
              Please consult with a doctor when losing 1 kg or more per week
              since it requires that you consume less than the minimum
              recommendation of 1,500 calories a day.
            </p>

            <div className="cc-toggle-section">
              <a href="#" onClick={() => setShowWeightGain(!showWeightGain)}>
                Show info for weight gain
              </a>
            </div>

            {showWeightGain && (
              <div id="cc-weightGainSection" className="cc-result-row">
                <div className="cc-result-box">
                  <p>
                    Mild weight gain <span>(0.25 kg/week)</span>
                  </p>
                  <div id="mildWeightGain" className="cc-calorie-box">
                    {calories.mildWeightGain} <span>Calories/day</span>
                  </div>
                </div>
                <div className="cc-result-box">
                  <p>
                    Weight gain <span>(0.5 kg/week)</span>
                  </p>
                  <div id="weightGain" className="cc-calorie-box">
                    {calories.weightGain} <span>Calories/day</span>
                  </div>
                </div>
                <div className="cc-result-box">
                  <p>
                    Fast weight gain <span>(1 kg/week)</span>
                  </p>
                  <div id="fastWeightGain" className="cc-calorie-box">
                    {calories.fastWeightGain} <span>Calories/day</span>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </main>
      <footer className="cc-footer">
        <p>2024 Binary Bandits. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Calorie;
