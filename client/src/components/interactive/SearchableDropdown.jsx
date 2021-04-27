import React, { useContext, useEffect } from 'react';
import { ThemeContext } from '../../constants/theme-context';
('react');
import { tunings } from '../../constants/tunings';

export default function SearchableDropdown({
  options,
  action,
  value,
  name,
  tuning,
}) {
  const theme = useContext(ThemeContext);

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'left',
        textAlign: 'left',
        alignItems: 'left',
      }}
    >
      <label
        className="dropdown-label"
        htmlFor={name}
        style={{ color: theme.text }}
      >
        {name.toUpperCase()}
      </label>
      <select
        name={name}
        style={{
          backgroundColor:
            name === 'Tuning' ? theme.tuning : theme.primary,
          border: `2px solid ${
            name === 'Tuning'
              ? theme.tuningAccent
              : theme.primaryAccent
          }`,
          color: theme.text,
        }}
        value={value}
        onChange={(e) => action(e.target.value)}
      >
        {options.map((opt, i) => {
          return (
            <option value={i} key={i}>
              {opt}
            </option>
          );
        })}
      </select>
    </div>
  );
}
