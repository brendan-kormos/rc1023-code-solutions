interface stringObject {
  [letter: string]: number;
}

export function charCounts(word: string): stringObject {
  const obj: stringObject = {};

  for (let i = 0; i < word.length; i++) {
    const char = word[i].toLowerCase();
    if (obj[char]) {
      obj[char]++;
    } else {
      obj[char] = 1;
    }
  }
  return obj;
}
