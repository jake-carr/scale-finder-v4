import React, { useContext } from 'react';
import { ThemeContext } from '../../constants/theme-context';
import { scales } from '../../constants/scales';
import { tunings } from '../../constants/tunings';

import CircularButton from '../interactive/CircularButton.jsx';

export default function Banner({
  toggleTheme,
  changeTuning,
  selectNote,
  selectScale,
  changeFretCount,
  changeStringCount,
}) {
  const theme = useContext(ThemeContext);
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
      className="banner"
      style={{
        backgroundColor: theme.gradient0,
        color: theme.primary,
      }}
    >
      <div className="container">
        <CircularButton
          title="Randomize scale and root note."
          action={randomize}
          spacing={true}
        />
        <CircularButton
          title="Reset to defaults (6 strings, 12 frets, standard tuning)."
          action={resetToDefaults}
        />
      </div>
      <div className="banner-title">Guitar Scale Finder</div>
      <div className="placeholder"></div>
      <div className="theme-button">
        <CircularButton
          title="Toggle between light and dark theme."
          action={toggleTheme}
          emoji={true}
        />
      </div>
    </div>
  );
}
