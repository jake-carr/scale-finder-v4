// toggled by a button on the right
// metronome modal itself is draggable and resizable, high z-index
// options: bpm, notes, volume
// mvp: bpm input/stepper , quarter/eight/sixteenth notes avail
//  add cleaner controls and more note options in future versions
// plays a sound

import React, { useState, useContext } from 'react';
import { ThemeContext } from '../../constants/theme-context';

// only prop will be isOpen
export default function Metronome({}) {
  const theme = useContext(ThemeContext);

  // Modal movement
  const [size, resizeWindow] = useState(100); // % ?
  const [position, moveWindow] = useState([0, 0]); // x, y % ?

  // Metronome settings
  const [BPM, setBPM] = useState(120); // Min 60, Max 240, selected by slider
  const [frequency, setFrequency] = useState('Quarter'); // Quarter, Eigth or Sixteenth, selected by radio btns
  const [volume, setVolume] = useState(50); // Min 0, Max 100, slider
  const [playing, toggleMetronome] = useState(false); // Start/stop button

  return (
    <div className="metronome">
      <div className="settings">
        <div className="metronome-setting">
          <span>{BPM}</span>
          <span>Slider goes here</span>
        </div>
        <div className="metronome-setting">
          <span>{frequency}</span>
          <span>Radio btns go here</span>
        </div>
        <div className="metronome-setting">
          <button>PLAY BUTTON</button>
          <span>{volume}</span>
          <span>Slider goes here</span>
        </div>
      </div>
    </div>
  );
}
