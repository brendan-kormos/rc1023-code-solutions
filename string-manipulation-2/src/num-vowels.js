/* exported numVowels */
const regex = /a|e|i|o|u/gi; // or /[aeiou]/gi // g:global match, don't stop after first match // i: case-insensitive matching
function numVowels(string) {
  const arrayMatched = string.match(regex);
  return arrayMatched ? arrayMatched.length : 0;
}
