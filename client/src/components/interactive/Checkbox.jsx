import React from 'react';

export default function Checkbox({ on, toggle }) {
  return (
    <button
      className="checkbox"
      id={on ? 'checked' : 'unchecked'}
      onClick={() => toggle(!on)}
    >
      {`Remember my settings ${on}`}
    </button>
  );
}
