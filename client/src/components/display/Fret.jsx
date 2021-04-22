import React, { useContext } from 'react';
import { ThemeContext } from '../../constants/theme-context';
import { indexToString, getDegree } from '../../constants/utils';

export default function Fret({
  note,
  sharps,
  allNotes,
  highlight,
  degrees,
  degreeNotation,
  label,
  currentScale,
}) {
  const theme = useContext(ThemeContext);

  const colorizeFret = () => {
    if (currentScale[0] === note && highlight) {
      return theme.highlighted;
    } else if (currentScale.includes(note)) {
      return theme.scale;
    } else {
      return theme.unused;
    }
  };

  const displayNote = () => {
    if (allNotes || currentScale.includes(note)) {
      return indexToString(note, sharps);
    } else {
      return '';
    }
  };

  const displayDegree = () => {
    let i = currentScale.indexOf(note);
    if (degrees && i >= 0) {
      return getDegree(i, degreeNotation);
    } else {
      return '';
    }
  };

  return (
    <div className="fret" style={{ backgroundColor: colorizeFret() }}>
      <div style={{ color: theme.text }}>{displayNote()}</div>
      <div style={{ color: theme.primary }}>{displayDegree()}</div>
      <span className="fret-label">
        {label ? String(label) : null}
      </span>
    </div>
  );
}
