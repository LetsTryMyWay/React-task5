import React, { useState } from 'react';
import './App.css';

function App() {
  const [birthdate, setBirthdate] = useState('');
  const [age, setAge] = useState(null);

  const calculateAge = () => {
    const birthYear = new Date(birthdate).getFullYear();
    const currentYear = new Date().getFullYear();
    const calculatedAge = currentYear - birthYear;
    setAge(calculatedAge);
  };

  const handleInputChange = (event) => {
    setBirthdate(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    calculateAge();
  };

  return (
    <div className="app-container">
      <h1>Age Calculator</h1>
      <form onSubmit={handleSubmit}>
        <label className='my-3'>
          Enter your Date of Birth :
          <input 
            type="date"
            value={birthdate}
            onChange={handleInputChange}
            required
          />
        </label>
        <button type="submit">Calculate Age</button>
      </form>
      {age !== null && <p>Your age is: {age} years old.</p>}
    </div>
  );
}

export default App;
