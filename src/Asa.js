import React, { useState } from 'react';

const Asa = () => {
    // Define a state variable 'count' and a function 'setCount' to update it
    const [count, setCount] = useState(0);
  
    return (
      <div>
        <h2>Simple React Example</h2>
        <p>You clicked {count} times</p>
        {/* Button that increments the count when clicked */}
        <button onClick={() => setCount(count + 1)}>
          Click me
        </button>
      </div>
    );
  }

export default Asa