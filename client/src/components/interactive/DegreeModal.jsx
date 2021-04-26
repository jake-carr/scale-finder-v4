import React, { useContext } from 'react';
import { ThemeContext } from '../../constants/theme-context';
export default function DegreeModal({ open, notation, select }) {
  const theme = useContext(ThemeContext);
  const options = ['Numeric', 'Roman numeral', 'Indian sargams'];
  const stylize = (notation, option) => {
    return notation === option
      ? { color: theme.secondary }
      : { color: theme.text };
  };

  return (
    <React.Fragment>
      {open ? (
        <div className="degree-modal">
          <div style={{ color: theme.tertiary, marginBottom: '1%' }}>
            Degree Notation
          </div>
          {options.map((opt, i) => {
            return (
              <button
                className="degree-option"
                key={i}
                style={stylize(notation, opt)}
                onClick={() => select(opt)}
              >
                {opt}
              </button>
            );
          })}
        </div>
      ) : null}
    </React.Fragment>
  );
}
