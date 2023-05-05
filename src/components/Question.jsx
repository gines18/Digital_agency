import React, { useState } from 'react';

function Question() {
  const [color, setColor] = useState('black');

  const handleClick = () => {
    setColor('red');
  };

  return (
    <div>
      <button onClick={handleClick} style={{ color }}>
        Yes
      </button>
    </div>
  );
}

export default Question;
