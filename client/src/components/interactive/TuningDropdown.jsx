import React, { useState, useEffect, useContext } from 'react';
import Select from 'react-select';
import { tunings } from '../../constants/tunings';
import { ThemeContext } from '../../constants/theme-context';

export default function TuningDropdown({ tuning, changeTuning }) {
  const mode = useContext(ThemeContext);
  const [open, toggleOpen] = useState(false);
  const [selection, changeSelection] = useState('');

  const listPresetTuningOptions = () => {
    let list = [];
    for (let tuning of tunings) {
      list.push({ value: tuning.values, label: tuning.name });
    }
    return list;
  };

  const tuningOptions = listPresetTuningOptions();

  const handleSelectPresetTuning = (event) => {
    let values = [];
    for (let option of tuningOptions) {
      values.push(option.value);
    }
    let index = values.indexOf(event.value);
    changeTuning(values[index]);
  };

  const createTheme = (theme) => {
    return {
      ...theme.colors,
      primary: mode.tuning,
      primary25: mode.tuningAccent,
      primary50: mode.tuningAccent,
      neutral0: mode.tuning,
      neutral5: mode.tuningAccent,
      neutral10: mode.tuningAccent,
      neutral20: mode.tuningAccent,
      neutral30: mode.text,
      neutral40: mode.text,
      neutral50: mode.text,
      neutral60: mode.text,
      neutral70: mode.text,
      neutral80: mode.text,
      neutral90: mode.text,
    };
  };

  useEffect(() => {
    // Dropdown will automatically switch to the correct tuning if the user manually adjusts to a preset one.
    let values = [];
    for (let option of tuningOptions) {
      values.push(option.value.join(','));
    }
    let index = values.indexOf(tuning.join(','));
    if (index >= 0) {
      let names = [];
      for (let option of tuningOptions) {
        names.push(option.label);
      }
      changeSelection(names[index]);
    } else {
      // Dropdown will read CUSTOM when the current tuning does not match any items in the preset tunings object.
      changeSelection('CUSTOM');
    }
  }, [tuning]);

  useEffect(() => {
    toggleOpen(false);
  }, [selection]);

  return (
    <div
      className="dropdown-container"
      onBlur={() => toggleOpen(false)}
    >
      <label
        className="dropdown-label"
        htmlFor="tuning-dropdown"
        style={{ color: mode.text }}
      >
        TUNING
      </label>
      <Select
        theme={(theme) => ({
          ...theme,
          colors: createTheme(theme),
        })}
        styles={{
          option: (styles) => ({
            ...styles,
            cursor: 'pointer',
          }),
          control: (styles) => ({
            ...styles,
            cursor: 'pointer',
          }),
        }}
        id="Tuning"
        name="tuning-dropdown"
        className="dropdown-menu"
        menuIsOpen={open}
        onFocus={() => toggleOpen(true)}
        blurInputOnSelect
        onChange={handleSelectPresetTuning}
        options={tuningOptions}
        value={{ value: selection, label: selection }}
      />
    </div>
  );
}
