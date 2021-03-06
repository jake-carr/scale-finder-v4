import React, { useContext } from 'react';
import { ThemeContext } from '../../constants/theme-context';

export default function CircularButton({
  title,
  action,
  emoji,
  spacing,
}) {
  const icons = {
    random: <i className="fas fa-dice" />,
    reset: <i className="fas fa-redo-alt" />,
    light: <i className="emoji">🌞</i>,
    dark: <i className="emoji">🌚</i>,
  };

  const theme = useContext(ThemeContext);
  const keyword = title.split(' ')[0];
  const mapTitleToIcon = () => {
    switch (keyword) {
      case 'Randomize':
        return icons.random;
      case 'Reset':
        return icons.reset;
      case 'Toggle':
        return theme.ref === 'light' ? icons.dark : icons.light;
    }
  };
  return (
    <>
      <button
        className={emoji ? 'emoji-button' : 'circular-button'}
        title={title}
        style={{
          backgroundColor: theme.primary,
          border: `2px solid ${theme.primaryAccent}`,
          color: theme.text,
        }}
        onClick={() => action()}
      >
        {mapTitleToIcon()}
      </button>
      {spacing ? <div style={{ marginRight: '0.5rem' }}></div> : null}
    </>
  );
}
