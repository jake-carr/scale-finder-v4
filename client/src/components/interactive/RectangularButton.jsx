import React from 'react';

export default function RectangularButton({ title, action, value }) {
  return (
    <button
      className="rectangular-button"
      onClick={() => action(!value)}
    >
      {title}
    </button>
  );
}
