import React, { createContext } from 'react';

export const themes = {
  light: {
    gradient0: '#D6D6D6',
    gradient1: '#E0E0E0',
    gradient2: '#EBEBEB',
    gradient3: '#F5F5F5',
    primary: '#34EAC5',
    primaryAccent: '#17DEB6',
    secondary: '#7765E3',
    secondaryAccent: '#6853DF',
    tertiary: 'FF1053',
    tertiaryAccent: '#FF0A50',
    text: '#141414',
    tuning: '#F2BB05',
    tuningAccent: '#C89A04',
    ref: 'light',
  },
  dark: {
    gradient0: '#5f5f5f',
    gradient1: '#4b4b4b',
    gradient2: '#363636',
    gradient3: '#2c2c2c',
    primary: 'rgba(124, 11, 168)',
    primaryAccent: 'rgba(165, 9, 226)',
    secondary: 'rgb(35, 196, 134)',
    secondaryAccent: 'rgb(52, 218, 154)',
    tertiary: '#34f8ff',
    tertiaryAccent: '#00D9E0',
    text: '#edf5e1',
    tuning: '#f52f80',
    tuningAccent: '#ff5ca0',
    ref: 'dark',
  },
};

export const ThemeContext = React.createContext(themes.dark);
