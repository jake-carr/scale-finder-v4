import React, { useContext } from 'react';
import { ThemeContext } from '../../constants/theme-context';

export default function Footer() {
  const theme = useContext(ThemeContext);
  return (
    <div
      className="footer"
      style={{ backgroundColor: theme.gradient2 }}
    >
      <a
        style={{ color: theme.tertiary, marginRight: '0.5rem' }}
        rel="noopener noreferrer"
        href="mailto: jake.ralph.carr@gmail.com"
        target="_blank"
      >
        Contact
      </a>
      <span style={{ color: theme.tertiary, marginRight: '0.5rem' }}>
        •
      </span>
      <a
        style={{ color: theme.tertiary }}
        rel="noopener noreferrer"
        href="https://apps.apple.com/us/app/guitar-scale-finder/id1487884068"
        target="_blank"
      >
        Download on the App Store (free, no ads)
      </a>
    </div>
  );
}
