import React, { useContext } from 'react';
import { ThemeContext } from '../../constants/theme-context';

export default function Stepper({ label, value, action, min, max }) {
  const theme = useContext(ThemeContext);

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
      <label className="stepper-label" style={{ color: theme.text }}>
        {label}
      </label>
      <div className="stepper-inner">
        <button
          className="stepper-button"
          style={{ color: theme.primary }}
          onClick={decrement}
        >
          -
        </button>
        <div
          className="stepper-counter"
          style={{ color: theme.text }}
        >
          {value}
        </div>
        <button
          className="stepper-button"
          style={{ color: theme.primary }}
          onClick={increment}
        >
          +
        </button>
      </div>
    </div>
  );
}
