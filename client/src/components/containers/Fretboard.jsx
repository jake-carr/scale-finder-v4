import React, { useState } from 'react';
import GuitarString from '../display/GuitarString.jsx';
import SearchableDropdown from '../interactive/SearchableDropdown.jsx';
import { tunings } from '../../constants/tunings';

export default function Fretboard({
  tuning,
  frets,
  sharps,
  allNotes,
  highlight,
  degrees,
  degreeNotation,
  changeTuning,
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

  const [preset, changePreset] = useState(tuning);

  const handleSelectPresetTuning = (i) => {
    changePreset(tunings[i].values);
  };

  const renderGuitarStrings = () => {
    console.log(tuning);
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
          preset={preset}
        />
      );
    });
  };

  return (
    <div className="fretboard-outer">
      <div className="fretboard">{renderGuitarStrings()}</div>
      <SearchableDropdown
        options={tuningOptions}
        action={handleSelectPresetTuning}
      />
      <div>Remember Settings Checkbox</div>
    </div>
  );
}
