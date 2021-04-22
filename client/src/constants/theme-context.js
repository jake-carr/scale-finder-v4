import React, {createContext} from 'react';

export const themes = {
  light: {
    ref: 'light',
    // todo
    background: '95f9e3',
    text: '564946',
    primary: '49d49d',
    secondary: '69ebd0',
    tertiary: '558564',
  },
  dark: {
    ref: 'dark',
    background: '#202020',
    text: '#edf5e1',
    // placeholders
    primary: 'd5a021',
    secondary: 'a49694',
    tertiary: '736b60',
    // frets
    highlighted: 'rgb(35, 196, 134)',
    scale: 'rgba(124, 11, 168, 0.877)',
    unused: '#5f5f5f'
  }
}

export const ThemeContext = React.createContext(
  themes.dark
);

// On any component that needs to use theme colors, add:
// const theme = useContext(ThemeContext)
// then use theme.primary, etc. as needed for inline stying