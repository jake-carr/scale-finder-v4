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
    ref: 'dark',
    primary: '#564787',
    secondary: '#23B5D3',
    tertiary: '#A2AEBB',
    text: '#DFE0E2',
    link: '#84DAEB',
    gradient0: '#342A50',
    gradient1: '#2C2343',
    gradient2: '#231C35'
  }
}

export const ThemeContext = React.createContext(
  themes.dark
);

// On any component that needs to use theme colors, add:
// const theme = useContext(ThemeContext)
// then use theme.primary, etc. as needed for inline stying