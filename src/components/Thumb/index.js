import React from 'react';

const Thumb = ({ color, size = 10 }) => (
  <span
    style={{
      display: 'inline-block',
      backgroundColor: color,
      width: size,
      height: size,
    }}
  ></span>
);

export default Thumb;
