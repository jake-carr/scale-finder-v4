import React, { useContext, useState } from 'react';
import { ThemeContext } from '../../constants/theme-context';
import SearchableDropdown from '../interactive/SearchableDropdown.jsx';
import Stepper from '../interactive/Stepper.jsx';
import RectangularButton from '../interactive/RectangularButton.jsx';
import DegreeModal from '../interactive/DegreeModal.jsx';
import CircularButton from '../interactive/CircularButton.jsx';
import InfoModal from '../display/InfoModal.jsx';
import { tunings } from '../../constants/tunings';
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
  changeTuning,
  note,
  scale,
}) {
  const [infoOpen, toggleInfo] = useState(false);

  const noteOptions = getAlteration(sharps);

  const theme = useContext(ThemeContext);

  const handleSelectNote = (i) => {
    selectNote(Number(i));
  };

  const randomize = () => {
    selectNote(Math.floor(Math.random() * 12));
    selectScale(Math.floor(Math.random() * scales.length));
  };

  const resetToDefaults = () => {
    changeFretCount(12);
    changeStringCount(6);
    changeTuning(tunings[0].values); // Standard
  };

  return (
    <div
      className="settings"
      style={{ backgroundColor: theme.gradient2 }}
    >
      <div className="settings-container-outer">
        <DegreeModal
          open={degrees}
          notation={degreeNotation}
          select={changeDegreeNotation}
        />
      </div>
      <div className="settings-container-inner">
        <div className="selectors">
          <div className="container">
            <CircularButton
              title="Randomize scale and root note."
              action={randomize}
              spacing={true}
            />
          </div>
          <SearchableDropdown
            options={noteOptions}
            action={handleSelectNote}
            value={note}
            name={'Root'}
          />
          <SearchableDropdown
            options={scales}
            action={selectScale}
            value={scale}
            name={'Scale'}
          />
          <button
            className="small-circular-button"
            style={
              infoOpen
                ? {
                    backgroundColor: theme.secondary,
                    border: `2px solid ${theme.secondaryAccent}`,
                    color: theme.gradient3,
                  }
                : {
                    backgroundColor: theme.gradient2,
                    border: `2px solid ${theme.gradient0}`,
                    color: theme.text,
                  }
            }
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
          <CircularButton
            title="Reset to defaults (6 strings, 12 frets, standard tuning)."
            action={resetToDefaults}
          />
        </div>
        <div className="selectors">
          <RectangularButton
            title={
              degrees ? 'Hide scale degrees' : 'Show scale degrees'
            }
            action={toggleDegrees}
            value={degrees}
            condition={'degrees'}
          />
          <RectangularButton
            title="Highlight root notes"
            action={toggleHighlight}
            value={highlight}
            condition={'highlight'}
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
      <div className="settings-container-outer">
        <InfoModal open={infoOpen} scale={scale} />
      </div>
    </div>
  );
}
