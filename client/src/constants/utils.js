export const sharps = ['A', 'A#', 'B', 'C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#'];
export const flats = ['A', 'Bb', 'B', 'C', 'Db', 'D', 'Eb', 'E', 'F', 'Gb', 'G', 'Ab'];

export const degreeNotation = [
  {
    numeral: 'I',
    numeric: '1',
    indian: 'Sa'
  },
  {
    numeral: 'II',
    numeric: '2',
    indian: 'Re'
  },
  {
    numeral: 'III',
    numeric: '3',
    indian: 'Ga'
  },
  {
    numeral: 'IV',
    numeric: '4',
    indian: 'Ma'
  },
  {
    numeral: 'V',
    numeric: '5',
    indian: 'Pa'
  },
  {
    numeral: 'VI',
    numeric: '6',
    indian: 'Da'
  },
  {
    numeral: 'VII',
    numeric: '7',
    indian: 'Ni'
  },
]

export const getDegree = (i, type) => {
  if (type === 'Numeric') {
    return degreeNotation[i].numeric
  }
  if (type === 'Roman numeral') {
    return degreeNotation[i].numeral
  }
  if (type === 'Indian sargams') {
    return degreeNotation[i].indian
  }
}

export const getAlteration = (isSharps) => {
  return isSharps ? sharps : flats;
};

export const indexToString = (index, isSharps) => {
  return isSharps ?  sharps[index] : flats[index];
};

