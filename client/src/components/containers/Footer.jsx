import React, { useContext } from 'react';
import { ThemeContext } from '../../constants/theme-context';

export default function Footer() {
  const theme = useContext(ThemeContext);
  return (
    <div
      className="footer"
      style={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '10%',
        backgroundColor: theme.gradient2,
      }}
    >
      <span style={{ color: theme.tertiary, marginRight: '1%' }}>
        App Store Link
      </span>
      <span style={{ color: theme.tertiary, marginRight: '1%' }}>
        •
      </span>
      <span style={{ color: theme.tertiary }}>Contact</span>
    </div>
  );
}
