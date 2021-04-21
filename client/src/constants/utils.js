export const sharps = ['A', 'A#', 'B', 'C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#'];
export const flats = ['A', 'Bb', 'C', 'Db', 'D', 'Eb', 'E', 'F', 'Gb', 'G', 'Ab'];

export const getAlteration = (isSharps) => {
  return isSharps ? sharps : flats;
};

export const indexToString = (index, isSharps) => {
  return isSharps ?  sharps[index] : flats[index];
};

