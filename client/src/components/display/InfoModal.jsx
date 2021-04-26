import React, { useContext } from 'react';
import { ThemeContext } from '../../constants/theme-context';
import {
  scales,
  mapQualitiesToStrings,
} from '../../constants/scales';

export default function InfoModal({ open, close, scale }) {
  const theme = useContext(ThemeContext);
  return (
    <React.Fragment>
      {open ? (
        <div
          className="info-modal"
          style={{
            border: `2px solid ${theme.primary}`,
            color: theme.text,
          }}
          onClick={() => close()}
        >
          <div className="info" style={{ color: theme.secondary }}>
            {scales[scale].info}
          </div>
          <div className="qualities">
            Triad qualities: {mapQualitiesToStrings(scale)}
          </div>
          <div
            className="info-footer"
            style={{ color: theme.tertiary }}
          >
            Click inside to close.
          </div>
        </div>
      ) : null}
    </React.Fragment>
  );
}
