import React, { useContext } from 'react';
import { ThemeContext } from '../../constants/theme-context';
import { saveLocally } from '../../constants/storage';

export default function Checkbox({ on, toggle }) {
  const theme = useContext(ThemeContext);
  const handleToggle = () => {
    if (!on) {
      toggle(true);
    } else {
      toggle(false);
      saveLocally('saveSettings', false);
    }
  };

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
        onChange={() => handleToggle()}
      />
      <label
        className="checkbox-label"
        style={{ color: theme.text }}
        for="saveSettings"
        onClick={() => handleToggle()}
      >
        Remember my settings
      </label>
    </div>
  );
}
