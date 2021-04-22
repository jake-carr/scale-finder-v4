import React from 'react';

export default function DegreeModal({ notation, select }) {
  const options = ['Numeric', 'Roman numeral', 'Indian sargams'];

  return (
    <div className="degree-modal">
      {options.map((opt, i) => {
        return (
          <button
            className="degree-option"
            key={i}
            id={notation === opt ? 'selected' : null}
            onClick={() => select(opt)}
          >
            {opt}
          </button>
        );
      })}
    </div>
  );
}
