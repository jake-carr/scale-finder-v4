import React, { useContext } from 'react';
import { ThemeContext } from '../../constants/theme-context';
import {
  scales,
  mapQualitiesToStrings,
} from '../../constants/scales';

export default function InfoModal({ open, scale }) {
  const theme = useContext(ThemeContext);
  return (
    <div
      className="info-modal"
      id={open ? 'active' : 'hidden'}
      style={{
        color: theme.text,
      }}
    >
      <div
        className="info"
        style={{ color: theme.secondary, fontWeight: 'bold' }}
      >
        {scales[scale].info}
      </div>
      {scales[scale].qualities ? (
        <div className="qualities">
          Triad qualities: {mapQualitiesToStrings(scale)}
        </div>
      ) : null}
    </div>
  );
}
