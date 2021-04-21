import React, { useState, useEffect } from 'react';
// import {ThemeContext, themes} from './theme-context';
import { indexToString, getAlteration } from '../constants/utils';
import { createScale, scales, listScales } from '../constants/scales';
import Banner from './containers/Banner';
import Settings from './containers/Settings';

export default function App() {
  // App
  const [theme, toggleTheme] = useState('dark');
  const [saveSettings, toggleSaveSettings] = useState(false);

  // Main selectors
  const [note, selectNote] = useState(3);
  const [scale, selectScale] = useState(0);

  // Secondary options
  const [frets, changeFretCount] = useState(12);
  const [strings, changeStringCount] = useState(6);
  const [degreeNotation, changeDegreeNotation] = useState('Numeric'); // Numeric, Roman or Indian

  // Toggles
  const [sharps, toggleSharps] = useState(true);
  const [highlight, toggleHighlight] = useState(false);
  const [allNotes, toggleAllNotes] = useState(false);
  const [degrees, toggleDegrees] = useState(false);

  // Tuning
  const [tuning, changeTuning] = useState([7, 2, 10, 5, 0, 7]); // Standard tuning 6-string high E to low E

  // Constants
  const scaleOptions = listScales();
  const [noteOptions, updateNoteOptions] = useState(
    getAlteration(sharps),
  );

  useEffect(() => {
    updateNoteOptions(getAlteration(sharps));
  }, [sharps]);

  return (
    <div>
      <Banner />
      <Settings
        notes={noteOptions}
        selectNote={selectNote}
        scales={scaleOptions}
        selectScale={selectScale}
        frets={frets}
        changeFretCount={changeFretCount}
        strings={strings}
        changeStringCount={changeStringCount}
        sharps={sharps}
        toggleSharps={toggleSharps}
        highlight={highlight}
        toggleHighlight={toggleHighlight}
        allNotes={allNotes}
        toggleAllNotes={toggleAllNotes}
        degrees={degrees}
        toggleDegrees={toggleDegrees}
        degreeNotation={degreeNotation}
        changeDegreeNotation={changeDegreeNotation}
      />
    </div>
  );
}

/*
    Components
      Banner (Top with Title)
        3x CircularBtn (Random, Reset, Light/Dark)
      Settings (Main)
        Primary Settings
          2 Searchable Dropdowns & Info button
        Secondary
          2 Steppers (with typeable input) for Strings/Frets
          Toggle buttons (Sharps, Roots, All Notes, Degrees)
            Degrees, when on, has a sub-modal for type of degree (Indian, Roman, Numeric)
      Fretboard View
        Tuners
        Fret/String #s from settings
        Searchable Preset Tunings Dropdown
        Checkbox to Remember my settings
      Footer
        App Store Link
        Contact
  */
