import React, { useContext } from 'react';
import { ThemeContext } from '../../constants/theme-context';
export default function DegreeModal({ open, notation, select }) {
  const theme = useContext(ThemeContext);
  const options = ['Numeric', 'Roman numeral', 'Indian sargams'];
  const stylize = (notation, option) => {
    return notation === option
      ? { marginRight: '0.5rem', color: theme.tertiary }
      : { marginRight: '0.5rem', color: theme.text };
  };

  return (
    <div className="degree-modal" id={open ? 'active' : 'hidden'}>
      <div
        style={{
          color: theme.tertiaryAccent,
          fontSize: '1rem',
          fontWeight: 'bold',
          marginBottom: '0.5rem',
        }}
      >
        Degree Notation
      </div>
      <div style={{ display: 'flex', flexFlow: 'row nowrap' }}>
        {options.map((opt, i) => {
          if (i < 2) {
            return (
              <React.Fragment key={i}>
                <button
                  className="degree-option"
                  style={stylize(notation, opt)}
                  onClick={() => select(opt)}
                >
                  {opt}
                </button>
                <span
                  style={{
                    color: theme.text,
                    marginRight: '0.1rem',
                  }}
                >
                  •
                </span>
              </React.Fragment>
            );
          } else {
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
          }
        })}
      </div>
    </div>
  );
}
