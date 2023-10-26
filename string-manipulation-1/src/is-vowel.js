/* exported isVowel */
// create an array of with each element being a different vowel and assign it to a variable named vowels
// define a function named isVowel with one string parameter named char
// search the vowels array for char after converting char to lowercase, if found return true, return false if not found

const vowels = ['a', 'e', 'i', 'o', 'u'];

function isVowel(char) {
  return (
    (vowels.find((element) => char.toLowerCase() === element) && true) || false
  );
}
