import React, { useEffect } from 'react';
import { indexToString } from '../../constants/utils';

export default function Tuner({
  change,
  tuning,
  stringIndex,
  preset,
  sharps,
}) {
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

  useEffect(() => {
    change(preset);
  }, [preset]);

  return (
    <div className="tuner">
      <button onClick={tuneDown}>-</button>
      <div>{indexToString(tuning[stringIndex], sharps)}</div>
      <button onClick={tuneUp}>+</button>
    </div>
  );
}
