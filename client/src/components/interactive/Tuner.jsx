import React, { useEffect, useContext } from 'react';
import { ThemeContext } from '../../constants/theme-context';
import { indexToString } from '../../constants/utils';

export default function Tuner({
  change,
  tuning,
  stringIndex,
  sharps,
  highlight,
  currentScale,
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

  const colorizeStringLabel = () => {
    if (currentScale[0] === tuning[stringIndex] && highlight) {
      return theme.secondary;
    } else if (currentScale.includes(tuning[stringIndex])) {
      return theme.primaryAccent; // better contrast on gradient3 background than primary
    } else {
      return theme.text;
    }
  };

  const buttonStyles = () => {
    return {
      backgroundColor: theme.tuning,
      border: `2px solid ${theme.tuningAccent}`,
      color: theme.text,
    };
  };

  return (
    <div className="tuner">
      <button
        style={buttonStyles()}
        className="tuning-button"
        onClick={tuneDown}
      >
        -
      </button>
      <div
        style={{
          color: colorizeStringLabel(),
          fontWeight: 'bold',
          paddingTop: '0.25rem',
        }}
      >
        {indexToString(tuning[stringIndex], sharps)}
      </div>
      <button
        style={buttonStyles()}
        className="tuning-button"
        onClick={tuneUp}
      >
        +
      </button>
    </div>
  );
}
