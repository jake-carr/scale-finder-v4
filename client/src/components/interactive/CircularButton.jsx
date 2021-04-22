import React, { useContext } from 'react';
import { ThemeContext } from '../../constants/theme-context';

const icons = {
  random: <i className="fas fa-dice" />,
  reset: <i className="fas fa-redo-alt" />,
  light: <i>🌞</i>,
  dark: <i>🌚</i>,
};

export default function CircularButton({ title, action }) {
  const theme = useContext(ThemeContext);
  const mapTitleToIcon = () => {
    let keyword = title.split(' ')[0];
    switch (keyword) {
      case 'Randomize':
        return icons.random;
      case 'Reset':
        return icons.reset;
      case 'Toggle':
        return theme.ref === 'light' ? icons.light : icons.dark;
    }
  };

  return (
    <button
      className="circular-button"
      title={title}
      onClick={() => action()}
    >
      {/* todo: change title to icons, then make title more descriptive for accessibility */}
      {mapTitleToIcon()}
    </button>
  );
}
