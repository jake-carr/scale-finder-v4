import React, { useContext } from 'react';
import { ThemeContext } from '../../constants/theme-context';

const icons = {
  random: <i className="fas fa-dice" />,
  reset: <i className="fas fa-redo-alt" />,
  light: <i className="emoji">🌞</i>,
  dark: <i className="emoji">🌚</i>,
};

export default function CircularButton({
  title,
  action,
  emoji,
  spacing,
}) {
  const theme = useContext(ThemeContext);
  const keyword = title.split(' ')[0];
  const mapTitleToIcon = () => {
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
    <React.Fragment>
      <button
        className={emoji ? 'emoji-button' : 'circular-button'}
        title={title}
        onClick={() => action()}
      >
        {/* todo: change title to icons, then make title more descriptive for accessibility */}
        {mapTitleToIcon()}
      </button>
      {spacing ? <div style={{ marginRight: '0.5rem' }}></div> : null}
    </React.Fragment>
  );
}
