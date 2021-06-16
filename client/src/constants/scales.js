import { indexToString } from './utils';

/*
// Chord qualities:
// maj, min, dim, aug
*/

export const scales = [
  {
    name: 'Ionian (Major)',
    pattern: [2, 2, 1, 2, 2, 2],
    qualities: ['maj', 'min', 'min', 'maj', 'maj', 'min', 'dim'],
    info: 'First mode of major scale.',
  },
  {
    name: 'Dorian',
    pattern: [2, 1, 2, 2, 2, 1],
    qualities: ['min', 'min', 'maj', 'maj', 'min', 'dim', 'maj'],
    info: 'Second mode of major scale.',
  },
  {
    name: 'Phrygian',
    pattern: [1, 2, 2, 2, 1, 2],
    qualities: ['min', 'maj', 'maj', 'min', 'dim', 'maj', 'min'],
    info: 'Third mode of major scale.',
  },
  {
    name: 'Lydian',
    pattern: [2, 2, 2, 1, 2, 2],
    qualities: ['maj', 'maj', 'min', 'dim', 'maj', 'min', 'min'],
    info: 'Fourth mode of major scale.',
  },
  {
    name: 'Mixolydian',
    pattern: [2, 2, 1, 2, 2, 1],
    qualities: ['maj', 'min', 'dim', 'maj', 'min', 'min', 'maj'],
    info: 'Fifth mode of major scale.',
  },
  {
    name: 'Aeolian (Natural Minor)',
    pattern: [2, 1, 2, 2, 1, 2],
    qualities: ['min', 'dim', 'maj', 'min', 'min', 'maj', 'maj'],
    info: 'Sixth mode of major scale.',
  },
  {
    name: 'Locrian',
    pattern: [1, 2, 2, 1, 2, 2],
    qualities: ['dim', 'maj', 'min', 'min', 'maj', 'maj', 'min'],
    info: 'Seventh mode of major scale.',
  },
  {
    name: 'Harmonic Minor',
    pattern: [2, 1, 2, 2, 1, 3],
    qualities: ['min', 'dim', 'aug', 'min', 'maj', 'maj', 'dim'],
    info: 'Aeolian scale with the seventh degree raised by one semitone.',
  },
  {
    name: 'Blues',
    pattern: [3, 2, 1, 1, 3],
    info: 'Minor pentatonic scale with a blues note added between the 3rd and 4th.',
  },
  {
    name: 'Major Hexatonic',
    pattern: [2, 2, 1, 2, 2],
    info: 'Major (Ionian) scale with the 7th removed.',
  },
  {
    name: 'Minor Hexatonic',
    pattern: [2, 1, 2, 2, 3],
    info: 'Minor (Aeolian) scale with the 6th removed.',
  },
  {
    name: 'Major Pentatonic',
    pattern: [2, 2, 3, 2],
    info: 'Gapped Ionian (Major) scale, omitting the 4th and 7th.',
  },
  {
    name: 'Minor Pentatonic',
    pattern: [3, 2, 2, 3],
    info: 'Gapped Aeolian (Minor) scale, omitting the 2nd and 6th.',
  },
  {
    name: 'Egyptian Pentatonic',
    pattern: [2, 3, 2, 3],
    info: 'Gapped Dorian scale, omitting the 3rd and 6th.',
  },
  {
    name: 'Phrygian Dominant',
    pattern: [1, 3, 1, 2, 1, 2],
    info: 'Fifth mode of the harmonic minor scale. Frequently used in Arabic, Egyptian, Spanish & Indian raga music.',
  },
  {
    name: 'Double Harmonic Major',
    pattern: [1, 3, 1, 2, 1, 3],
    info: 'AKA Byzantine, Arabic or Gypsy Major scale. Has a unique sound that does not fit easily into common Western chord progressions.',
  },
  {
    name: 'Japanese (Yo)',
    pattern: [2, 3, 2, 2],
    info: 'Gapped Mixolydian scale, omitting the 3rd and 7th.',
  },
  {
    name: 'Japanese (Hirajōshi)',
    pattern: [1, 4, 1, 4],
    info: "A scale adapted from shamishen music. Occasionally used by rock & jazz guitarists in search of 'new' sounds.",
  },
  {
    name: 'Indian Pentantonic',
    pattern: [4, 1, 2, 3],
    info: 'Gapped Phrygian Dominant scale, omitting the 2nd and 6th. Play with slides and bends for Indian feel.',
  },
  {
    name: 'Persian',
    pattern: [1, 3, 1, 1, 2, 3],
    info: 'Characterized by the liberal use of half steps and augmented seconds, and frequent use of chromaticism.',
  },
];

export const getChords = (scaleIndex, rootIndex, sharps) => {
  let note = rootIndex;
  const parseNote = (n) => {
    if (n >= 24) return n - 24;
    else if (n >= 12) return n - 12;
    else return n;
  };
  const pattern = scales[scaleIndex].pattern;
  const chords = scales[scaleIndex].qualities.map((qual, i) => {
    let chord;
    switch (qual) {
      case 'min':
        chord = `${indexToString(note, sharps)} Minor`;
        note = parseNote(note + pattern[i]);
        return chord;
      case 'maj':
        chord = `${indexToString(note, sharps)} Major`;
        note = parseNote(note + pattern[i]);
        return chord;
      case 'dim':
        chord = `${indexToString(note, sharps)} Diminished`;
        note = parseNote(note + pattern[i]);
        return chord;
      case 'aug':
        chord = `${indexToString(note, sharps)} Minor`;
        note = parseNote(note + pattern[i]);
        return chord;
    }
  });
  return chords.join(', ');
};

const indexToDegreeString = (i) => {
  const strings = ['1st', '2nd', '3rd', '4th', '5th', '6th', '7th'];
  return strings[i];
};

export const mapQualitiesToStrings = (scaleIndex) => {
  let result = [];
  scales[scaleIndex].qualities.map((quality, i) => {
    switch (quality) {
      case 'min':
        result.push(`Minor ${indexToDegreeString(i)}`);
        break;
      case 'maj':
        result.push(`Major ${indexToDegreeString(i)}`);
        break;
      case 'dim':
        result.push(`Diminished ${indexToDegreeString(i)}`);
        break;
      case 'aug':
        result.push(`Augmented ${indexToDegreeString(i)}`);
        break;
    }
  });
  return result.join(', ');
};

export const listScales = () => {
  return scales.map((scale, i) => {
    return scale.name;
  });
};

export const createScale = (root, pattern) => {
  let scale = [root];
  let i = root;
  for (let step of pattern) {
    scale.push((i += step));
  }
  return scale.map((n) => {
    return n >= 12 ? n - 12 : n;
  });
};
