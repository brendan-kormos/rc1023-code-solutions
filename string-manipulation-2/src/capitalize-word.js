/* exported capitalizeWord */
//  define a function named capitalizeWord with one parameter word
//    check if the word javascript regardless of capitalization is being used, if so return "JavaScript"
//    get the first character from word, convert it to uppercase, then assign it to the variable firsLetter
//    get all characters after the first character, convert to lowercase, then assign it to the variable tail
//  return firstLetter concatenated with tail
function capitalizeWord(word) {
  if (word.toLowerCase() === 'javascript') return 'JavaScript';
  const firstLetter = word[0].toUpperCase();
  const tail = word.slice(1).toLowerCase();
  return firstLetter + tail;
}
