import React, { useState, useContext } from 'react';
import GuitarString from '../display/GuitarString.jsx';
import { ThemeContext } from '../../constants/theme-context';

export default function Fretboard({
  currentScale,
  tuning,
  frets,
  sharps,
  allNotes,
  highlight,
  degrees,
  degreeNotation,
  changeTuning,
}) {
  const theme = useContext(ThemeContext);

  const renderGuitarStrings = () => {
    return tuning.map((note, i) => {
      return (
        <GuitarString
          tuning={tuning} // entire array of tunings
          stringIndex={i} // index within tuning
          key={i}
          frets={frets}
          sharps={sharps}
          allNotes={allNotes}
          highlight={highlight}
          degrees={degrees}
          degreeNotation={degreeNotation}
          changeTuning={changeTuning}
          currentScale={currentScale}
        />
      );
    });
  };

  return (
    <div
      className="fretboard-outer"
      style={{ backgroundColor: theme.gradient3 }}
    >
      <div className="fretboard">{renderGuitarStrings()}</div>
    </div>
  );
}
