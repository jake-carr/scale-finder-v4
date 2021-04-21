import React, {createContext} from 'react';

export const themes = {
  light: {
    background: '95f9e3',
    text: '564946',
    primary: '49d49d',
    secondary: '69ebd0',
    tertiary: '558564',
  },
  dark: {
    background: '4b4237',
    text: 'ede7d9',
    primary: 'd5a021',
    secondary: 'a49694',
    tertiary: '736b60',
  }
}

export const ThemeContext = React.createContext(
  themes.dark
);

// On any component that needs to use theme colors, add:
// const theme = useContext(ThemeContext)
// then use theme.primary, etc. as needed for inline stying