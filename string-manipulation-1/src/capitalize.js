/* exported capitalize */
// define a function named capitalize with one string parameter named word
//  capitalize the first character of the word parameter, then convert the rest of the word to lowercase and concatenate with the first character, then return that value
function capitalize(word) {
  return word[0].toUpperCase() + word.slice(1).toLowerCase();
}
