const parseTuning = (str) => {
  const arr = str.split(',');
  return arr.map((i) => {
    return Number(i)
  })
}

export const retrieveLocalStorage = () => {
  let values = {},
      keys = Object.keys(localStorage),
      i = keys.length;
  while ( i-- ) {
    let item = localStorage.getItem(keys[i]);
    // Tuning, theme and degree notation need special parsing, JSON.parse for booleans and numbers
      if (keys[i] === "tuning") {
        values[keys[i]] = parseTuning(item)
      } else if (keys[i] === "theme" || keys[i] === "degreeNotation") {
        values[keys[i]] = item
      } else {
        values[keys[i]] = JSON.parse(item) ;
      }
  }
  return values;
}

export const saveLocally = (setting, value) => {
  localStorage.setItem(setting, value)
}