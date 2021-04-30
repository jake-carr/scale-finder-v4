import React, { useState, useEffect, useContext } from 'react';
import { ThemeContext, themes } from '../constants/theme-context';
import { tunings } from '../constants/tunings';
import { indexToString, getAlteration } from '../constants/utils';
import { createScale, scales, listScales } from '../constants/scales';
import {
  saveLocally,
  retrieveLocalStorage,
} from '../constants/storage';
import MobilePage from './containers/MobilePage';
import Settings from './containers/Settings';
import Fretboard from './containers/Fretboard';
import Footer from './containers/Footer';
import CircularButton from './interactive/CircularButton';
import Checkbox from './interactive/Checkbox.jsx';

export default function App() {
  // App
  const [selectedTheme, toggleTheme] = useState('dark');
  const [saveSettings, toggleSaveSettings] = useState(false);

  const handleToggleTheme = () => {
    console.log('hello');
    if (selectedTheme === 'dark') {
      toggleTheme('light');
    } else {
      toggleTheme('dark');
    }
  };

  // Main selectors
  const [note, selectNote] = useState(3);
  const [scale, selectScale] = useState(0);
  const [tuning, changeTuning] = useState(tunings[0].values); // Standard

  // Secondary options
  const [frets, changeFretCount] = useState(12);
  const [strings, changeStringCount] = useState(6);
  const [degreeNotation, changeDegreeNotation] = useState('Numeric'); // Numeric, Roman numeral or Indian sargams

  // Toggles
  const [sharps, toggleSharps] = useState(true);
  const [highlight, toggleHighlight] = useState(false);
  const [allNotes, toggleAllNotes] = useState(false);
  const [degrees, toggleDegrees] = useState(false);

  // Constants
  const theme = useContext(ThemeContext);
  const scaleOptions = listScales();
  const [currentScale, changeScale] = useState(
    createScale(note, scales[scale].pattern),
  );

  let isMobile = false;

  if (/Mobi/.test(navigator.userAgent)) {
    isMobile = true;
  }

  // Hooks

  // Local storage toggle
  useEffect(() => {
    if (saveSettings === true) {
      saveLocally('theme', selectedTheme);
      saveLocally('note', note);
      saveLocally('scale', scale);
      saveLocally('sharps', sharps);
      saveLocally('highlight', highlight);
      saveLocally('allNotes', allNotes);
      saveLocally('degrees', degrees);
      saveLocally('degreeNotation', degreeNotation);
      saveLocally('tuning', tuning);
      saveLocally('frets', frets);
      saveLocally('strings', strings);
      saveLocally('saveSettings', true);
    }
  }, [saveSettings]);

  // Save each setting change in memory while storage is enabled
  useEffect(() => {
    if (saveSettings) {
      saveLocally('theme', selectedTheme);
      saveLocally('note', note);
      saveLocally('scale', scale);
      saveLocally('sharps', sharps);
      saveLocally('highlight', highlight);
      saveLocally('allNotes', allNotes);
      saveLocally('degrees', degrees);
      saveLocally('degreeNotation', degreeNotation);
      saveLocally('tuning', tuning);
      saveLocally('frets', frets);
      saveLocally('strings', strings);
    }
  }, [
    selectedTheme,
    note,
    scale,
    sharps,
    highlight,
    allNotes,
    degrees,
    degreeNotation,
    tuning,
    frets,
    strings,
  ]);

  // Check local storage on load, use it for state if it exists
  useEffect(() => {
    const storage = retrieveLocalStorage();
    if (storage.saveSettings) {
      selectNote(storage.note);
      selectScale(storage.scale);
      toggleTheme(storage.theme);
      toggleSaveSettings(storage.saveSettings);
      toggleSharps(storage.sharps);
      toggleHighlight(storage.highlight);
      toggleAllNotes(storage.allNotes);
      toggleDegrees(storage.degrees);
      changeDegreeNotation(storage.degreeNotation);
      changeTuning(storage.tuning);
      changeFretCount(storage.frets);
      changeStringCount(storage.strings);
    }
  }, []);

  // Update page background color on theme change
  useEffect(() => {
    if (!isMobile) {
      document.body.style.backgroundColor =
        themes[selectedTheme].primary;
    }
  }, [selectedTheme]);

  // Update scale
  useEffect(() => {
    changeScale(createScale(note, scales[scale].pattern));
  }, [note, scale]);

  // Add or remove strings
  useEffect(() => {
    if (strings < tuning.length) {
      let update = [...tuning];
      update.length = strings;
      changeTuning(update);
    }
    if (strings > tuning.length) {
      let update = [...tuning];
      for (let i = strings - tuning.length - 1; i >= 0; i--) {
        let note = 7; // default note E
        if (i + tuning.length === 4) {
          note = 0; // 5th string, A
        }
        if (i + tuning.length === 6) {
          note = 2; // 7th string, B
        }
        update.push(note);
      }
      changeTuning(update);
    }
  }, [strings]);

  if (isMobile) {
    return <MobilePage />;
  }

  return (
    <ThemeContext.Provider value={themes[selectedTheme]}>
      <div className="app">
        <div className="checkbox-container">
          <Checkbox on={saveSettings} toggle={toggleSaveSettings} />
        </div>
        <div className="theme-button">
          <CircularButton
            title="Toggle between light and dark theme."
            action={handleToggleTheme}
            emoji={true}
          />
        </div>
        <Settings
          note={note}
          scale={scale}
          selectNote={selectNote}
          scales={scaleOptions}
          selectScale={selectScale}
          tuning={tuning}
          changeTuning={changeTuning}
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
        <Fretboard
          currentScale={currentScale}
          tuning={tuning}
          frets={frets}
          strings={strings}
          sharps={sharps}
          allNotes={allNotes}
          highlight={highlight}
          degrees={degrees}
          degreeNotation={degreeNotation}
          changeTuning={changeTuning}
        />
        <Footer />
      </div>
    </ThemeContext.Provider>
  );
}
