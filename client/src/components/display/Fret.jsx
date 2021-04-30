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
      return theme.secondary;
    } else if (currentScale.includes(note)) {
      return theme.primary;
    } else {
      return theme.gradient0;
    }
  };

  const displayNote = () => {
    if (allNotes || currentScale.includes(note)) {
      return indexToString(note, sharps);
    }
  };

  const displayDegree = () => {
    let i = currentScale.indexOf(note);
    if (i >= 0) {
      return getDegree(i, degreeNotation);
    }
  };

  return (
    <React.Fragment>
      <div
        className="fret"
        style={{ backgroundColor: colorizeFret() }}
      >
        <span
          className="fret-note"
          style={{
            color:
              currentScale[0] === note && highlight
                ? theme.gradient3
                : theme.text,
          }}
        >
          {displayNote()}
        </span>
        <span
          className="fret-degree"
          id={degrees ? 'active' : 'hidden'}
          style={{
            color: theme.tertiary,
            left:
              degreeNotation === 'Numeric'
                ? '0.5rem'
                : degreeNotation === 'Roman numeral'
                ? '0.25rem'
                : 0,
          }}
        >
          {displayDegree()}
        </span>
      </div>
      {label ? (
        <span className="fret-label" style={{ color: theme.text }}>
          {String(label)}
        </span>
      ) : null}
    </React.Fragment>
  );
}
