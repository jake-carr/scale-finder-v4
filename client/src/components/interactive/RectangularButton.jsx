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
    return condition
      ? {
          backgroundColor: theme.secondary,
          border: `2px solid ${theme.gradient1}`,
          color: theme.gradient2,
        }
      : {
          backgroundColor: theme.gradient2,
          border: `2px solid ${theme.gradient0}`,
          color: theme.text,
        };
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
