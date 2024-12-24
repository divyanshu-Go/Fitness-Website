import React from 'react';
import './Signup.css'; 

const SignUp = () => {
  return (
    <div className="signup-login-container">
      <div className="signup-logo">
        <img src="./Logo.png" alt="Logo" />
      </div>
      <h2 className="signup-title">Create an Account</h2>
      <p className="signup-description">Please fill in the form to create an account</p>
      <form action="#" method="post" className="signup-form">
        <div className="signup-input-group">
          <label htmlFor="fullname" className="signup-label">Full Name</label>
          <input type="text" id="fullname" name="fullname" required className="signup-input" />
        </div>
        <div className="signup-input-group">
          <label htmlFor="email" className="signup-label">Email</label>
          <input type="email" id="email" name="email" required className="signup-input" />
        </div>
        <div className="signup-input-group">
          <label htmlFor="password" className="signup-label">Password</label>
          <input type="password" id="password" name="password" required className="signup-input" />
        </div>
        <div className="signup-input-group">
          <label htmlFor="confirm-password" className="signup-label">Confirm Password</label>
          <input type="password" id="confirm-password" name="confirm-password" required className="signup-input" />
        </div>
        <button type="submit" className="signup-button">Sign Up</button>
      </form>
      <div className="signup-additional-options">
        <p className="signup-already-member">Already have an account? <a href="#" className="signup-link">Login here</a></p>
      </div>
    </div>
  );
};

export default SignUp;
