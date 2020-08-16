/* eslint-disable */
// * Libs
import React, { useState } from 'react';

// ! Component
export default () => {
  const [title, setTitle] = useState('Cool component!');

  return (
    <h2
      style={{
        textAlign: 'center',
        fontSize: '32px',
        color: 'red',
      }}
      onClick={() => setTitle('New Title!')}
    >
      {title}
    </h2>
  );
};
