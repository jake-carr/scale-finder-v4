import React from 'react';

export default function SearchableDropdown({
  options,
  action,
  value,
}) {
  return (
    <select value={value} onChange={(e) => action(e.target.value)}>
      {options.map((opt, i) => {
        return (
          <option value={i} key={i}>
            {opt}
          </option>
        );
      })}
    </select>
  );
}
