import React from 'react';
import Fret from './Fret';
import Tuner from '../interactive/Tuner';

export default function GuitarString({
  tuning,
  stringIndex,
  frets,
  sharps,
  allNotes,
  highlight,
  degrees,
  degreeNotation,
  preset,
  changeTuning,
  currentScale,
}) {
  const renderFrets = () => {
    const root = tuning[stringIndex];
    const fretLabels = [1, 3, 5, 7, 9, 12, 15, 17, 19, 21, 24];
    return [...Array(frets).keys()].map((fret, i) => {
      const fretNumber = i + 1;
      let note = root + fretNumber;
      if (note >= 12) {
        note = note - 12;
      }
      let label = null;
      if (fretLabels.includes(fretNumber) && stringIndex === 5) {
        label = fretNumber;
      }
      return (
        <Fret
          key={i}
          note={note}
          sharps={sharps}
          allNotes={allNotes}
          highlight={highlight}
          degrees={degrees}
          degreeNotation={degreeNotation}
          label={label}
          currentScale={currentScale}
        />
      );
    });
  };

  return (
    <div className="guitar-string">
      <Tuner
        change={changeTuning}
        tuning={tuning}
        stringIndex={stringIndex}
        preset={preset}
        sharps={sharps}
      />
      {renderFrets()}
    </div>
  );
}
