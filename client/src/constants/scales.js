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