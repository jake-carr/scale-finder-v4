import React from 'react';

export default function Stepper({ label, value, action, min, max }) {
  const decrement = () => {
    if (value > min) {
      action(value - 1);
    }
  };
  const increment = () => {
    if (value < max) {
      action(value + 1);
    }
  };

  return (
    <div className="stepper">
      <label>{label}</label>
      <button onClick={decrement}>-</button>
      <div>{value}</div>
      <button onClick={increment}>+</button>
    </div>
  );
}
