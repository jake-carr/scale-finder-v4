import React from 'react';

export default function CircularButton({ title, action }) {
  return (
    <button
      className="circular-button"
      title={title}
      onClick={() => action()}
    >
      {/* todo: change title to icons, then make title more descriptive for accessibility */}
      {title}
    </button>
  );
}
