import React, { useState } from 'react';

const Nitay = () => {
    // Define a state variable 'inputValue' and a function 'setInputValue' to update it
    const [inputValue, setInputValue] = useState('');
  
    // Event handler to update the state when the input value changes
    const handleChange = (event) => {
      setInputValue(event.target.value);
    };
  
    return (
      <div>
        <h2>Controlled Input Example</h2>
        {/* Input field with value set to 'inputValue' and onChange handler */}
        <input
          type="text"
          value={inputValue}
          onChange={handleChange}
          placeholder="Type something..."
        />
        {/* Display the current value of the input */}
        <p>You typed: {inputValue}</p>
      </div>
    );
  }

export default Nitay