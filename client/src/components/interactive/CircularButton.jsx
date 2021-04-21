import React from 'react';

export default function CircularButton({ title, action }) {
  return (
    <button
      className="circular-button"
      title={title}
      onClick={() => action}
    >
      {title}
    </button>
  );
}
