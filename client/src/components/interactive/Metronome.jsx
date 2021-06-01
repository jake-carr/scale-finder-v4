import React, { useState, useContext } from 'react';
import { ThemeContext } from '../../constants/theme-context';
import Slider from 'react-input-slider';
import Modal from 'react-modal-resizable-draggable';

// only prop will be isOpen
export default function Metronome({ isOpen, toggleMetronome }) {
  const theme = useContext(ThemeContext);

  // Metronome settings
  const [BPM, setBPM] = useState(120); // Min 60, Max 240, selected by slider
  const [frequency, setFrequency] = useState('Quarter'); // Quarter, Eigth or Sixteenth, selected by radio btns
  const [volume, setVolume] = useState(50); // Min 0, Max 100, slider
  const [playing, togglePlaying] = useState(false); // Start/stop button

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={() => toggleMetronome(false)}
      onFocus={() => console.log(Modal)}
      className={'metronome'}
      initWidth={300}
      initHeight={200}
    >
      <div className="settings">
        <div className="metronome-setting">
          <label for="bpm-slider">BPM {BPM} </label>
          <Slider
            name="bpm-slider"
            axis="x"
            x={BPM}
            xmin={60}
            xmax={240}
            onChange={({ x }) => setBPM(x)}
            styles={{
              track: {
                backgroundColor: theme.tuning,
              },
              active: {
                backgroundColor: theme.secondary,
              },
            }}
          />
        </div>
        <div className="metronome-setting">
          <input
            type="radio"
            value="Quarter"
            name="frequency"
            checked={frequency === 'Quarter'}
            onChange={(e) => setFrequency(e.target.value)}
          />
          ♩
          <input
            type="radio"
            value="Eighth"
            name="frequency"
            checked={frequency === 'Eighth'}
            onChange={(e) => setFrequency(e.target.value)}
          />
          ♫
          <input
            type="radio"
            value="Sixteenth"
            name="frequency"
            checked={frequency === 'Sixteenth'}
            onChange={(e) => setFrequency(e.target.value)}
          />
          ♬
        </div>
        <div className="metronome-setting">
          <i className="fas fa-volume-down" />
          <Slider
            name="vol-slider"
            axis="x"
            x={volume}
            xmin={0}
            xmax={100}
            onChange={({ x }) => setVolume(x)}
            styles={{
              track: {
                backgroundColor: theme.tuning,
              },
              active: {
                backgroundColor: theme.secondary,
              },
            }}
          />
          <i className="fas fa-volume-up" />
        </div>
        <div className="metronome-setting">
          <button onClick={() => togglePlaying(!playing)}>
            {playing ? (
              <i className="fas fa-pause" />
            ) : (
              <i className="fas fa-play" />
            )}
          </button>
        </div>
      </div>
    </Modal>
  );
}
