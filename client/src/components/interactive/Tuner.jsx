import React, { useEffect, useContext } from 'react';
import { ThemeContext } from '../../constants/theme-context';
import { indexToString } from '../../constants/utils';

export default function Tuner({
  change,
  tuning,
  stringIndex,
  sharps,
}) {
  const theme = useContext(ThemeContext);

  const parseDown = (n) => {
    return n === 0 ? 11 : n - 1;
  };

  const parseUp = (n) => {
    return n === 11 ? 0 : n + 1;
  };

  const tuneDown = () => {
    let t = [...tuning];
    t[stringIndex] = parseDown(t[stringIndex]);
    change(t);
  };

  const tuneUp = () => {
    let t = [...tuning];
    t[stringIndex] = parseUp(t[stringIndex]);
    change(t);
  };

  const buttonStyles = () => {
    return {
      backgroundColor: theme.gradient0,
      color: theme.text,
    };
  };

  return (
    <div className="tuner">
      <button
        style={buttonStyles()}
        className="small-circular-button"
        onClick={tuneDown}
      >
        -
      </button>
      <div style={{ color: theme.text, paddingTop: '0.25rem' }}>
        {indexToString(tuning[stringIndex], sharps)}
      </div>
      <button
        style={buttonStyles()}
        className="small-circular-button"
        onClick={tuneUp}
      >
        +
      </button>
    </div>
  );
}
