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
  let result = [];
  scales[scaleIndex].qualities.map((quality, i) => {
    switch(quality) {
      case "min":
        result.push(`Minor ${indexToDegreeString(i)}`)
        break;
      case "maj":
        result.push(`Major ${indexToDegreeString(i)}`)
        break;
      case "dim":
        result.push(`Diminished ${indexToDegreeString(i)}`)
        break;
      case "aug":
        result.push(`Augmented ${indexToDegreeString(i)}`)
        break;
    }
  })
  return result.join(', ')
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