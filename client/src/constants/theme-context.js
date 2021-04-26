import React, {createContext} from 'react';

// 1
// import React, { useContext } from 'react';
// import { ThemeContext } from '../../constants/theme-context';

// // 2
// const theme = useContext(ThemeContext);

export const themes = {
  light: {
    ref: 'light',
    primary: '#63D471',
    secondary: '#69FFF1',
    tertiary: '#E365C1',
    text: '#060D0F',
    link: '#A12B9B',
    gradient0: '#F5F5F5',
    gradient1: '#FFF3EB',
    gradient2: '#FFE7D6'
  },
  dark: {
    gradient0: '#5f5f5f',
    gradient1: '#4b4b4b',
    gradient2: '#363636',
    gradient3: '#2c2c2c',
    primary: 'rgba(124, 11, 168, 0.877)',
    primaryAccent: 'rgba(165, 9, 226, 0.877)',
    secondary: 'rgb(35, 196, 134)',
    secondaryAccent: 'rgb(52, 218, 154)',
    tertiary: '#34f8ff',
    tertiaryAccent: '#c8fdff',
    text: '#edf5e1',
    tuning: '#f52f80',
    tuningAccent: '#ff5ca0',
    ref: 'dark'
  }
}

export const ThemeContext = React.createContext(
  themes.dark
);

// On any component that needs to use theme colors, add:
// const theme = useContext(ThemeContext)
// then use theme.primary, etc. as needed for inline stying