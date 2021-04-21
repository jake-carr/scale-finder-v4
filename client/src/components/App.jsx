import React, {useState, useEffect} from 'react'
// import {ThemeContext, themes} from './theme-context';
import {indexToString, getAlteration} from '../constants/utils'
import {createScale, scales, listScales, scaleNameByIndex} from '../constants/scales'

export default function App() {
  // App
  const [theme, toggleTheme] = useState('dark');
  const [saveSettings, toggleSaveSettings] = useState(false);

  // Main selectors
  const [note, selectNote] = useState(3);
  const [scale, selectScale] = useState(0);

  // Secondary options
  const [frets, changeFrets] = useState(12);
  const [strings, changeStrings] = useState(6);

  // Toggles
  const [sharps, toggleSharps] = useState(true);
  const [highlight, toggleHighlight] = useState(false);
  const [allNotes, toggleAllNotes] = useState(false);
  const [degrees, toggleDegrees] = useState(false);

  // Tuning
  const [tuning, changeTuning] = useState([7, 2, 10, 5, 0, 7]); // Standard tuning 6-string high E to low E

  // Constants
  const scaleOptions = listScales();
  const [noteOptions, updateNoteOptions] = useState(getAlteration(sharps));

  useEffect(() => {
    updateNoteOptions(getAlteration(sharps));
  }, [sharps])

  return (

    <div>
      <div>Top Header</div>
        <div>Centered Title</div>
        <div>Randomize Button</div>
        <div>Reset to defaults button</div>
        <div>Light/Dark Theme Button</div>
      <div>Main Options</div>
        <select onChange={(e) => selectNote(e.target.value)}>
          {noteOptions.map((n, i) => {return <option value={i} key={i}>{n}</option>})}
        </select>
        <select onChange={(e) => selectScale(e.target.value)}>
          {scaleOptions.map((s, i) => {return <option value={i} key={i}>{s}</option>})}
        </select>
        <div>Small hover info button next to scale name</div>
      <div>Secondary Options</div>
        <div>Number of Frets</div>
        <div>Number of Strings</div>
      <div>Fretboard Options</div>
        <div>Highlight Roots</div>
        <button onClick={() => toggleSharps(!sharps)}>go</button>
        <div>All Frets</div>
        <div>Degrees</div>
        <div>While degrees is open, select indian, numeral or number notation</div>
      <div>Fretboard</div>
      <div>Searchable Tuning Preset Dropdown</div>
      <div>Remember My Settings</div>
      <div>Footer</div>
        <div>App Store Link</div>
        <div>Contact</div>
    </div>
  )
}