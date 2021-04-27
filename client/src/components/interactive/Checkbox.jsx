import React, { useContext } from 'react';
import { ThemeContext } from '../../constants/theme-context';

export default function Checkbox({ on, toggle }) {
  const theme = useContext(ThemeContext);
  return (
    <div className="checkbox">
      <input
        style={{
          border: `2px solid ${theme.primaryAccent}`,
          backgroundColor: theme.primary,
          color: on ? theme.text : theme.primary,
        }}
        name="saveSettings"
        type="checkbox"
        checked={on}
        onChange={() => toggle(!on)}
      />
      <label
        className="checkbox-label"
        style={{ color: theme.text }}
        htmlFor="saveSettings"
        onClick={() => toggle(!on)}
      >
        Remember my settings
      </label>
    </div>
  );
}
