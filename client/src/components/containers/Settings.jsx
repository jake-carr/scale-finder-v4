import React from 'react';
import SearchableDropdown from '../interactive/SearchableDropdown.jsx';
import Stepper from '../interactive/Stepper.jsx';
import RectangularButton from '../interactive/RectangularButton.jsx';
import DegreeModal from '../interactive/DegreeModal.jsx';
import { getAlteration } from '../../constants/utils';
import { scales } from '../../constants/scales';

export default function Settings({
  frets,
  changeFretCount,
  strings,
  changeStringCount,
  selectNote,
  scales,
  selectScale,
  sharps,
  toggleSharps,
  highlight,
  toggleHighlight,
  allNotes,
  toggleAllNotes,
  degrees,
  toggleDegrees,
  degreeNotation,
  changeDegreeNotation,
  tuning,
  note,
  scale,
}) {
  const noteOptions = getAlteration(sharps);

  const handleSelectNote = (i) => {
    selectNote(Number(i));
  };

  return (
    <div className="settings">
      <div className="selectors">
        <SearchableDropdown
          options={noteOptions}
          action={handleSelectNote}
          value={note}
        />
        <SearchableDropdown
          options={scales}
          action={selectScale}
          value={scale}
        />
        <button>info</button>
      </div>
      <div className="selectors">
        <Stepper
          label="Strings"
          value={tuning.length}
          action={changeStringCount}
          min={4}
          max={12}
        />
        <Stepper
          label="Frets"
          value={frets}
          action={changeFretCount}
          min={12}
          max={24}
        />
      </div>
      <div className="selectors">
        <RectangularButton
          title={sharps ? 'b' : '#'}
          action={toggleSharps}
          value={sharps}
        />
        <RectangularButton
          title="Highlight root notes"
          action={toggleHighlight}
          value={highlight}
        />
        <RectangularButton
          title={allNotes ? 'Label scale only' : 'Label all notes'}
          action={toggleAllNotes}
          value={allNotes}
        />
        <RectangularButton
          title={
            degrees ? 'Hide scale degrees' : 'Show scale degrees'
          }
          action={toggleDegrees}
          value={degrees}
        />
        {degrees ? (
          <DegreeModal
            notation={degreeNotation}
            select={changeDegreeNotation}
          />
        ) : null}
      </div>
    </div>
  );
}
