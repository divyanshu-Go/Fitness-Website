import React, { useState } from 'react';
import './Bmi.css'

const Bmi = () => {
    const [height, setHeight] = useState('');
    const [weight, setWeight] = useState('');
    const [heightUnit, setHeightUnit] = useState('cm');
    const [weightUnit, setWeightUnit] = useState('kg');
    const [bmi, setBmi] = useState(null);
    const [category, setCategory] = useState('');
    const [needleAngle, setNeedleAngle] = useState(0);

    const calculateBmi = (event) => {
        event.preventDefault();

        // Convert units if necessary
        const heightInMeters = heightUnit === 'cm' ? height / 100 : height * 0.0254;
        const weightInKg = weightUnit === 'kg' ? weight : weight * 0.453592;

        // Calculate BMI
        const bmiValue = weightInKg / (heightInMeters * heightInMeters);
        setBmi(bmiValue.toFixed(2));

        let category = '';
        let needleAngle = 0;
        if (bmiValue < 18.5) {
            category = 'Underweight';
            needleAngle = -45; // Yellow
        } else if (bmiValue < 24.9) {
            category = 'Normal weight';
            needleAngle = 0; // Orange
        } else if (bmiValue < 29.9) {
            category = 'Overweight';
            needleAngle = 45; // Red
        } else {
            category = 'Obesity';
            needleAngle = 90; // Black
        }

        setCategory(category);
        setNeedleAngle(needleAngle);
    };

    return (
      
        <main className="bmi-main">
            <section className="bmi-calculator">
                <h3>BMI Calculator</h3>
                <img src="https://www.kotaklife.com/assets/images/calculator/bmi-calculator/BMI-calculator.png" alt="bmi" />
                <br />
                <form onSubmit={calculateBmi}>
                    <div className="input-group">
                        <label htmlFor="height">Height:</label>
                        <input
                            type="number"
                            id="height"
                            name="height"
                            placeholder="Enter your height"
                            value={height}
                            onChange={(e) => setHeight(e.target.value)}
                            required
                        />
                        <select
                            id="heightUnit"
                            name="heightUnit"
                            value={heightUnit}
                            onChange={(e) => setHeightUnit(e.target.value)}
                        >
                            <option value="cm">Centimeters</option>
                            <option value="in">Inches</option>
                        </select>
                    </div>

                    <div className="input-group">
                        <label htmlFor="weight">Weight:</label>
                        <input
                            type="number"
                            id="weight"
                            name="weight"
                            placeholder="Enter your weight"
                            value={weight}
                            onChange={(e) => setWeight(e.target.value)}
                            required
                        />
                        <select
                            id="weightUnit"
                            name="weightUnit"
                            value={weightUnit}
                            onChange={(e) => setWeightUnit(e.target.value)}
                        >
                            <option value="kg">Kilograms</option>
                            <option value="lbs">Pounds</option>
                        </select>
                    </div>

                    <button type="submit" className="btn">Calculate BMI</button>
                </form>

                <div className="bmi-result" id="bmiResult">
                    <h3>Your BMI is: <span id="bmiValue">{bmi}</span></h3>
                    <p id="bmiCategory">{category}</p>
                </div>

                <div className="bmi-meter">
                    <div className="meter">
                        <div
                            className="needle"
                            id="bmiNeedle"
                            style={{ transform: `rotate(${needleAngle}deg)` }}
                        ></div>
                    </div>
                </div>

                <div className="bmi-info">
                    <h3>BMI Information</h3>
                    <table>
                        <tbody>
                            <tr>
                                <th>Category</th>
                                <th>BMI</th>
                            </tr>
                            <tr>
                                <td id="underweight">Underweight</td>
                                <td> &lt; 18.5</td>
                            </tr>
                            <tr>
                                <td id="normalweight">Normal weight</td>
                                <td> 18.5 – 24.9</td>
                            </tr>
                            <tr>
                                <td id="overweight">Overweight</td>
                                <td> 25 – 29.9</td>
                            </tr>
                            <tr>
                                <td id="obesity">Obesity</td>
                                <td> ≥ 30</td>
                            </tr>
                        </tbody>
                    </table>
                    <br />
                    <br />
                    <br />
                    <p>
                        Maintaining a healthy BMI is crucial for overall well-being. Regular exercise, balanced nutrition, and
                        staying active are key to managing your BMI. If you find your BMI is outside the normal range, consider
                        consulting with a healthcare provider for personalized advice.
                    </p>
                    <br />
                    <br />
                    <h3>Risks associated with being overweight</h3>
                    <p>
                        Being overweight increases the risk of a number of serious diseases and health conditions. Below is a list of said risks, according to the Centers for Disease Control and Prevention (CDC):
                    </p>
                    <br />
                    <ul>
                        <li>1. High blood pressure</li>
                        <li>2. Higher levels of LDL cholesterol, which is widely considered "bad cholesterol," lower levels of HDL cholesterol, considered to be good cholesterol in moderation, and high levels of triglycerides</li>
                        <li>3. Type II diabetes</li>
                        <li>4. Coronary heart disease</li>
                        <li>5. Stroke</li>
                        <li>6. Gallbladder disease</li>
                        <li>7. Osteoarthritis, a type of joint disease caused by breakdown of joint cartilage</li>
                        <li>8. Sleep apnea and breathing problems</li>
                        <li>9. Certain cancers (endometrial, breast, colon, kidney, gallbladder, liver)</li>
                        <li>10. Low quality of life</li>
                        <li>11. Mental illnesses such as clinical depression, anxiety, and others</li>
                        <li>12. Body pains and difficulty with certain physical functions</li>
                        <li>13. Generally, an increased risk of mortality compared to those with a healthy BMI</li>
                    </ul>
                    <br />
                    <p>
                        As can be seen from the list above, there are numerous negative, in some cases fatal, outcomes that may result from being overweight. Generally, a person should try to maintain a BMI below 25 kg/m², but ideally should consult their doctor to determine whether or not they need to make any changes to their lifestyle in order to be healthier.
                    </p>
                    <br />
                    <br />
                    <h3>Risks associated with being underweight</h3>
                    <br />
                    <p>Being underweight has its own associated risks, listed below:</p>
                    <br />
                    <ul>
                        <li>1. Malnutrition, vitamin deficiencies, anemia (lowered ability to carry blood vessels)</li>
                        <li>2. Osteoporosis, a disease that causes bone weakness, increasing the risk of breaking a bone</li>
                        <li>3. A decrease in immune function</li>
                        <li>4. Growth and development issues, particularly in children and teenagers</li>
                        <li>5. Possible reproductive issues for women due to hormonal imbalances that can disrupt the menstrual cycle. Underweight women also have a higher chance of miscarriage in the first trimester</li>
                        <li>6. Potential complications as a result of surgery</li>
                        <li>7. Generally, an increased risk of mortality compared to those with a healthy BMI</li>
                    </ul>
                    <p>
                        In some cases, being underweight can be a sign of some underlying condition or disease such as anorexia nervosa, which has its own risks. Consult your doctor if you think you or someone you know is underweight, particularly if the reason for being underweight does not seem obvious.
                    </p>
                </div>
            </section>
        </main>
    );
};

export default Bmi;
