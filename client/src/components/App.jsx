import React, { useState, useEffect, useContext } from 'react';
import { ThemeContext, themes } from '../constants/theme-context';
import { tunings } from '../constants/tunings';
import { indexToString, getAlteration } from '../constants/utils';
import { createScale, scales, listScales } from '../constants/scales';
import Banner from './containers/Banner';
import Settings from './containers/Settings';
import Fretboard from './containers/Fretboard';
import Footer from './containers/Footer';

export default function App() {
  // App
  const [selectedTheme, toggleTheme] = useState('dark');
  const [saveSettings, toggleSaveSettings] = useState(false);

  const handleToggleTheme = () => {
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

  useEffect(() => {
    changeScale(createScale(note, scales[scale].pattern));
  }, [note, scale]);

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

  return (
    <ThemeContext.Provider value={themes[selectedTheme]}>
      <div className="app">
        <Banner
          toggleTheme={handleToggleTheme}
          changeTuning={changeTuning}
          selectNote={selectNote}
          selectScale={selectScale}
          changeFretCount={changeFretCount}
          changeStringCount={changeStringCount}
        />
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
          saveSettings={saveSettings}
          toggleSaveSettings={toggleSaveSettings}
        />
        <Footer />
      </div>
    </ThemeContext.Provider>
  );
}
