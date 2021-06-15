import React, { useState, useEffect, useContext } from 'react';
import Select from 'react-select';
import { ThemeContext } from '../../constants/theme-context';
import { indexToString } from '../../constants/utils';
import { listScales } from '../../constants/scales';

export default function PrimaryDropdown({
  options,
  action,
  val,
  name,
  sharps,
}) {
  const mode = useContext(ThemeContext);
  const [open, toggleOpen] = useState(false);
  const [selection, changeSelection] = useState('');

  const createTheme = (theme) => {
    return {
      ...theme.colors,
      primary: mode.primary,
      primary25: mode.primaryAccent,
      primary50: mode.text,
      primary75: mode.primaryAccent,
      neutral0: mode.primary,
      neutral5: mode.primary,
      neutral10: mode.primaryAccent,
      neutral20: mode.primaryAccent,
      neutral30: mode.text,
      neutral40: mode.text,
      neutral50: mode.text,
      neutral60: mode.text,
      neutral70: mode.text,
      neutral80: mode.text,
      neutral90: mode.text,
    };
  };

  const mapOptions = () => {
    return options.map((opt, i) => {
      return {
        value: i,
        label: opt,
      };
    });
  };

  const opts = mapOptions();
  const scaleNames = listScales();

  const handleSelect = (e) => {
    action(e.value);
    changeSelection(e.label);
  };

  useEffect(() => {
    toggleOpen(false);
  }, [selection]);

  useEffect(() => {
    if (name === 'Root') {
      changeSelection(indexToString(val, sharps));
    } else {
      changeSelection(scaleNames[val]);
    }
  }, [val]);

  return (
    <div
      className="dropdown-container"
      onBlur={() => toggleOpen(false)}
    >
      <label
        className="dropdown-label"
        htmlFor={name}
        style={{ color: mode.text }}
      >
        {name.toUpperCase()}
      </label>
      <Select
        theme={(theme) => ({
          ...theme,
          colors: createTheme(theme),
        })}
        styles={{
          menu: (provided) => ({
            ...provided,
            opacity: 1,
          }),
          option: (styles) => ({
            ...styles,
            cursor: 'pointer',
          }),
          control: (styles) => ({
            ...styles,
            cursor: 'pointer',
          }),
        }}
        id={name}
        name={name}
        className="dropdown-menu"
        menuIsOpen={open}
        onFocus={() => toggleOpen(true)}
        blurInputOnSelect
        onChange={(e) => handleSelect(e)}
        options={opts}
        value={{
          value: indexToString(val, sharps),
          label: selection,
        }}
      />
    </div>
  );
}
