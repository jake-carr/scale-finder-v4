import React, { useState, useContext } from 'react';
import GuitarString from '../display/GuitarString.jsx';
import SearchableDropdown from '../interactive/SearchableDropdown.jsx';
import Checkbox from '../interactive/Checkbox.jsx';
import { tunings } from '../../constants/tunings';
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
  saveSettings,
  toggleSaveSettings,
}) {
  const listPresetTunings = () => {
    let list = [];
    for (let tuning of tunings) {
      list.push(tuning.name);
    }
    return list;
  };

  const tuningOptions = listPresetTunings();

  const theme = useContext(ThemeContext);

  const handleSelectPresetTuning = (i) => {
    changeTuning(tunings[i].values);
  };

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
      <div className="tuning-container">
        <SearchableDropdown
          options={tuningOptions}
          action={handleSelectPresetTuning}
          // TODO: needs a value in order to update dynamically when reset to defaults button is clicked.
        />
        <Checkbox on={saveSettings} toggle={toggleSaveSettings} />
      </div>
    </div>
  );
}
