import React, { useContext } from 'react';
import { ThemeContext } from '../../constants/theme-context';
('react');

export default function RectangularButton({
  title,
  action,
  value,
  condition,
}) {
  const theme = useContext(ThemeContext);

  const stylize = () => {
    if (value) {
      switch (condition) {
        case 'highlight':
          return {
            backgroundColor: theme.secondary,
            border: `2px solid ${theme.secondaryAccent}`,
            color: theme.gradient3,
          };
        case 'degrees':
          return {
            backgroundColor: theme.tertiary,
            border: `2px solid ${theme.tertiaryAccent}`,
            color: theme.gradient3,
          };
        default:
          return {
            backgroundColor: theme.gradient3,
            border: `2px solid ${theme.gradient1}`,
            color: theme.text,
          };
      }
    } else {
      return {
        backgroundColor: theme.gradient3,
        border: `2px solid ${theme.gradient1}`,
        color: theme.text,
      };
    }
  };

  return (
    <button
      className="rectangular-button"
      onClick={() => action(!value)}
      style={stylize()}
    >
      {title}
    </button>
  );
}
