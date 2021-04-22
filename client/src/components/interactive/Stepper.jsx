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
      <label className="stepper-label">{label}</label>
      <div className="stepper-inner">
        <button className="stepper-button" onClick={decrement}>
          -
        </button>
        <div className="stepper-counter">{value}</div>
        <button className="stepper-button" onClick={increment}>
          +
        </button>
      </div>
    </div>
  );
}
