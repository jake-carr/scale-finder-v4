import React, { useContext } from 'react';
import { ThemeContext } from '../../constants/theme-context';
import {
  scales,
  mapQualitiesToStrings,
} from '../../constants/scales';

export default function InfoModal({ open, scale }) {
  const theme = useContext(ThemeContext);
  return (
    <React.Fragment>
      {open ? (
        <div
          className="info-modal"
          style={{
            color: theme.text,
          }}
        >
          <div className="info" style={{ color: theme.secondary }}>
            {scales[scale].info}
          </div>
          <div className="qualities">
            Triad qualities: {mapQualitiesToStrings(scale)}
          </div>
        </div>
      ) : null}
    </React.Fragment>
  );
}
