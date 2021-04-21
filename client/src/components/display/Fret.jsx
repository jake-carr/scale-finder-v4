import React, { useContext } from 'react';
import { indexToString } from '../../constants/utils';

export default function Fret({
  note,
  sharps,
  allNotes,
  highlight,
  degrees,
  degreeNotation,
  label,
}) {
  return (
    <div className="fret">
      <div>{indexToString(note, sharps)}</div>
      {label ? String(label) : null}
    </div>
  );
}
