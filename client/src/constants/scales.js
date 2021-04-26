/*
// Chord qualities:
// maj, min, dim, aug
*/

export const scales = [
  {
    name: "Ionian (Major)",
    pattern: [2, 2, 1, 2, 2, 2],
    qualities: ["maj", "min", "min", "maj", "maj", "min", "dim"],
    category: "major",
    info: "First mode of major scale."
  },
  {
    name: "Aeolian (Natural Minor)",
    pattern: [2, 1, 2, 2, 1, 2],
    qualities: ["min", "dim", "maj", "min", "min", "maj", "maj"],
    category: "major",
    info: "Sixth mode of major scale."
  },
];

const indexToDegreeString = i => {
  const strings = ['1st', '2nd', '3rd', '4th', '5th', '6th', '7th'];
  return strings[i]
}

export const mapQualitiesToStrings = scaleIndex => {
  return scales[scaleIndex].qualities.map((quality, i) => {
    switch(quality) {
      case "min":
        return `Minor ${indexToDegreeString(i)}`
      case "maj":
        return `Major ${indexToDegreeString(i)}`
      case "dim":
        return `Diminished ${indexToDegreeString(i)}`
      case "aug":
        return `Augmented ${indexToDegreeString(i)}`
    }
  })
}

export const listScales = () => {
  return scales.map((scale, i) => {
    return scale.name
  })
}

export const createScale = (root, pattern) => {
  let scale = [root];
  let i = root;
  for (let step of pattern) {
    scale.push(i += step);
  }
  return scale.map(n => {return n >= 12 ? n - 12 : n});
}