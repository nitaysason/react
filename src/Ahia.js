import React, { useState } from 'react';

const Ahia = () => {
    const [formData, setFormData] = useState({
      username: '',
      email: '',
      password: '',
    });
    const [errors, setErrors] = useState({});
    const [submitted, setSubmitted] = useState(false); // New state variable to track submission
  
    const handleInputChange = (event) => {
      const { name, value } = event.target;
      setFormData({
        ...formData,
        [name]: value,
      });
    };
  
    const handleSubmit = (event) => {
      event.preventDefault();
      const validationErrors = validateForm(formData);
      if (Object.keys(validationErrors).length === 0) {
        console.log(formData);
        setSubmitted(true); // Set submitted flag to true
      } else {
        setErrors(validationErrors);
      }
    };
  
    const validateForm = (data) => {
      let errors = {};
      if (!data.username.trim()) {
        errors.username = 'Username is required';
      }
      if (!data.email.trim()) {
        errors.email = 'Email is required';
      } else if (!isValidEmail(data.email)) {
        errors.email = 'Invalid email format';
      }
      if (!data.password.trim()) {
        errors.password = 'Password is required';
      } else if (data.password.length < 6) {
        errors.password = 'Password must be at least 6 characters long';
      }
      return errors;
    };
  
    const isValidEmail = (email) => {
      return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    };
  
    return (
      <div>
        <h2>Form with Validation</h2>
        {submitted ? ( // Display user information if form is submitted
          <div>
            <p>Submitted User Information:</p>
            <p>Username: {formData.username}</p>
            <p>Email: {formData.email}</p>
          </div>
        ) : ( // Display form if not yet submitted
          <form onSubmit={handleSubmit}>
            <div>
              <label>Username:</label>
              <input
                type="text"
                name="username"
                value={formData.username}
                onChange={handleInputChange}
              />
              {errors.username && <span className="error">{errors.username}</span>}
            </div>
            <div>
              <label>Email:</label>
              <input
                type="text"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
              />
              {errors.email && <span className="error">{errors.email}</span>}
            </div>
            <div>
              <label>Password:</label>
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleInputChange}
              />
              {errors.password && <span className="error">{errors.password}</span>}
            </div>
            <button type="submit">Submit</button>
          </form>
        )}
      </div>
    );
  }
  
export default Ahia