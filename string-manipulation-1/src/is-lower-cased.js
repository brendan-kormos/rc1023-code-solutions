/* exported isLowerCased */
// define a function named isLowerCased with one string parameter named word
//  begin a loop that iterates through each character:
//    check if any charcter isn't lowercase, if true return false
//  if no characters are uppercase then return true
function isLowerCased(word) {
  for (let i = 0; i < word.length; i++) {
    if (word[i].toLowerCase() !== word[i]) return false;
  }
  return true;
}
