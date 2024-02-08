import React, { useState } from 'react';
import   './RegistrtionForm.css';

const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    gender: '',
    hobbies: [],
  });

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;

    if (type === 'checkbox') {
      const updatedHobbies = checked
        ? [...formData.hobbies, value]
        : formData.hobbies.filter((hobby) => hobby !== value);

      setFormData({
        ...formData,
        hobbies: updatedHobbies,
      });
    } else {
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Data:', formData);
    // You can perform further actions like sending data to a server here
  };

  return (
    <div className="registration-form-container">
      <form onSubmit={handleSubmit} className="registration-form">
        <label>
          Username:
          <input
            type="text"
            name="username"
            value={formData.username}
            onChange={handleInputChange}
          />
        </label>

        <label>
          Email:
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
          />
        </label>

        <label>
          Password:
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleInputChange}
          />
        </label>

        <label>
          Gender:
          <select
            name="gender"
            value={formData.gender}
            onChange={handleInputChange}
          >
            <option value="">Select</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
        </label>

        <label>
          Hobbies (Enter multiple, comma-separated):
          <input
            type="text"
            name="hobbies"
            value={formData.hobbies.join(', ')}
            onChange={handleInputChange}
          />
        </label>

        <div className="hobbies-checkboxes">
          <p>Select from predefined hobbies:</p>
          <label>
            <input
              type="checkbox"
              name="hobbies"
              value="Reading"
              checked={formData.hobbies.includes('Reading')}
              onChange={handleInputChange}
            /> Reading
          </label>

          <label>
            <input
              type="checkbox"
              name="hobbies"
              value="Gaming"
              checked={formData.hobbies.includes('Gaming')}
              onChange={handleInputChange}
            /> Gaming
          </label>

          <label>
            <input
              type="checkbox"
              name="hobbies"
              value="Cooking"
              checked={formData.hobbies.includes('Cooking')}
              onChange={handleInputChange}
            /> Cooking
          </label>
        </div>

        <button type="submit">Submit</button>
      </form>

      <div className="current-state">
        <h2>Current State:</h2>
        <p>Username: {formData.username}</p>
        <p>Email: {formData.email}</p>
        <p>Password: {formData.password}</p>
        <p>Gender: {formData.gender}</p>
        <p>Hobbies: {formData.hobbies.join(', ')}</p>
      </div>
    </div>
  );
};

export default RegistrationForm;