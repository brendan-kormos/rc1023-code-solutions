/* exported isUpperCased */
// define a function named isUpperCased with one string parameter named word
//  begin a loop that iterates through each character:
//    check if any charcter isn't uppercase, if true return false
//  if no characters are lowercase then return true
function isUpperCased(word) {
  for (let i = 0; i < word.length; i++) {
    if (word[i].toUpperCase() !== word[i]) return false;
  }
  return true;
}
