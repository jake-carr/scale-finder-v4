import React from 'react';
import GuitarString from '../display/GuitarString.jsx';

export default function Fretboard({
  tuning,
  frets,
  sharps,
  allNotes,
  highlight,
  degrees,
  degreeNotation,
  saveSettings,
  toggleSaveSettings,
}) {
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
        />
      );
    });
  };

  return (
    <div className="fretboard-outer">
      <div className="fretboard">{renderGuitarStrings()}</div>
      <div>Tuning Dropdown</div>
      <div>Remember Settings Checkbox</div>
    </div>
  );
}
