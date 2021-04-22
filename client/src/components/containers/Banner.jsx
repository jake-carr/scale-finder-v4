import React, { useContext } from 'react';
import { ThemeContext } from '../../constants/theme-context';
import CircularButton from '../interactive/CircularButton.jsx';

export default function Banner({ toggleTheme }) {
  const theme = useContext(ThemeContext);
  return (
    <div
      className="banner"
      style={{ backgroundColor: theme.primary, color: theme.text }}
    >
      <div className="container">
        <CircularButton title="randomize" />
        <CircularButton title="reset" />
      </div>
      <div className="banner-title">Guitar Scale Finder</div>
      <CircularButton title="theme" action={toggleTheme} />
    </div>
  );
}
