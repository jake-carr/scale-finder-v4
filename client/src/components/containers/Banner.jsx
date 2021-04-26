import React, { useContext } from 'react';
import { ThemeContext } from '../../constants/theme-context';
import { scales } from '../../constants/scales';
import CircularButton from '../interactive/CircularButton.jsx';

export default function Banner({ toggleTheme }) {
  const theme = useContext(ThemeContext);
  return (
    <div
      className="banner"
      style={{
        backgroundColor: theme.gradient1,
        color: theme.secondary,
      }}
    >
      <div className="banner-title">Guitar Scale Finder</div>
    </div>
  );
}
