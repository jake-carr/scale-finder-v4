import React, { useContext, useState } from 'react';
import { ThemeContext } from '../../constants/theme-context';
import SearchableDropdown from '../interactive/SearchableDropdown.jsx';
import Stepper from '../interactive/Stepper.jsx';
import RectangularButton from '../interactive/RectangularButton.jsx';
import DegreeModal from '../interactive/DegreeModal.jsx';
import InfoModal from '../display/InfoModal.jsx';
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
  const [infoOpen, toggleInfo] = useState(false);

  const noteOptions = getAlteration(sharps);

  const theme = useContext(ThemeContext);

  const handleSelectNote = (i) => {
    selectNote(Number(i));
  };

  return (
    <div
      className="settings"
      style={{ backgroundColor: theme.gradient1 }}
    >
      <InfoModal
        open={infoOpen}
        close={() => toggleInfo(false)}
        scale={scale}
      />
      <DegreeModal
        open={degrees}
        notation={degreeNotation}
        select={changeDegreeNotation}
      />
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
        <button
          className="small-circular-button"
          style={{
            backgroundColor: theme.gradient2,
            border: `2px solid ${theme.gradient0}`,
            color: theme.text,
          }}
          onClick={() => toggleInfo(!infoOpen)}
        >
          i
        </button>
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
          title={
            degrees ? 'Hide scale degrees' : 'Show scale degrees'
          }
          action={toggleDegrees}
          value={degrees}
          condition={degrees}
        />
        <RectangularButton
          title="Highlight root notes"
          action={toggleHighlight}
          value={highlight}
          condition={highlight}
        />
        <RectangularButton
          title={allNotes ? 'Label scale only' : 'Label all notes'}
          action={toggleAllNotes}
          value={allNotes}
        />

        <button
          className="small-circular-button"
          style={{
            backgroundColor: theme.gradient2,
            border: `2px solid ${theme.gradient0}`,
            color: theme.text,
          }}
          title="Toggle preferred alteration (sharps or flats)."
          onClick={() => toggleSharps(!sharps)}
        >
          {sharps ? '♭' : '♯'}
        </button>
      </div>
    </div>
  );
}
