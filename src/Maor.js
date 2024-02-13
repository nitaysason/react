import React, { useState } from 'react';

const Maor = () => {
    // Define a state variable 'count' and a function 'setCount' to update it
    const [count, setCount] = useState(0);
  
    // Function to increment the count
    const increment = () => {
      setCount(count + 1);
    };
  
    // Function to decrement the count
    const decrement = () => {
      setCount(count - 1);
    };
  
    // Function to reset the count
    const reset = () => {
      setCount(0);
    };
  
    return (
      <div>
        <h2>Counter</h2>
        <p>Count: {count}</p>
        <button onClick={increment}>Increment</button>
        <button onClick={decrement}>Decrement</button>
        <button onClick={reset}>Reset</button>
      </div>
    );
  }

export default Maor