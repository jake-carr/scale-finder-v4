import React from 'react';
import {
  scales,
  mapQualitiesToStrings,
} from '../../constants/scales';

export default function InfoModal({ open, close, scale }) {
  return (
    <React.Fragment>
      {open ? (
        <div className="info-modal" onClick={() => close()}>
          <div className="info">{scales[scale].info}</div>
          <div className="qualities">
            {mapQualitiesToStrings(scale)}
          </div>
          <div className="info-footer">Click inside to close.</div>
        </div>
      ) : null}
    </React.Fragment>
  );
}
