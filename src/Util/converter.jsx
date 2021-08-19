const romanIntMap = {
  I: 1,
  IV: 4,
  V: 5,
  IX: 9,
  X: 10,
  XL: 40,
  L: 50,
  XC: 90,
  C: 100,
  CD: 400,
  D: 500,
  CM: 900,
  M: 1000,
  Mv: 4000,
  v: 5000,
  Mx: 9000,
  x: 10000,
  xl: 40000,
  l: 50000,
  xc: 90000,
  c: 100000,
  cd: 400000,
  d: 500000,
  cm: 900000,
  m: 1000000
};

export const romanNumerals = {
  I: 1,
  V: 5,
  X: 10,
  L: 50,
  C: 100,
  D: 500,
  M: 1000,
  v: 5000,
  x: 10000,
  l: 50000,
  c: 100000,
  d: 500000,
  m: 1000000
};

/**
 * Takes an integer and returns its roman numeral equivalent.
 * @param {Number} value
 * @returns {String}
 */
export const calculateRomanVal = (value) => {
  debugger;
  let str = "",
    numeralKeys = Object.keys(romanIntMap),
    maxVal = numeralKeys[numeralKeys.length - 1],
    cr = maxVal,
    element;
  while (value > 0) {
    for (element in romanIntMap) {
      if (romanIntMap.hasOwnProperty(element)) {
        if (romanIntMap[element] > value || element === maxVal) {
          if (element === maxVal && value >= romanIntMap[element]) {
            value = value - romanIntMap[element];
            str = str + element;
          } else {
            value = value - romanIntMap[cr];
            str = str + cr;
          }
          break;
        }
        cr = element;
      }
    }
  }
  return str;
};

/**
 * Takes a string containing only valid roman numerals
 * and returns integrer
 * @param {String} val
 * @returns {Number}
 */
export const calculateIntValue = (val) => {
  debugger;
  var result = 0,
    value = 0,
    prevValue = 0,
    i = val.length - 1;
  for (i; i >= 0; i -= 1) {
    value = parseInt(romanNumerals[val.charAt(i)], 10);
    prevValue = parseInt(romanNumerals[val.charAt(i - 1)], 10);
    if (isNaN(prevValue) || prevValue >= value) {
      result += value;
    } else {
      result += value - prevValue;
      i -= 1;
    }
  }
  return result;
};
