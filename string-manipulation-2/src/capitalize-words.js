/* exported capitalizeWords */
//  define a function named capitalizeWords with one parameter, string
//    convert the string to lowercase
//    split the string into array with the pattern ' '
//    use a loop to iterate through the array:
//      convert the first letter of each element to uppercase and concatenate it with the rest of the element
//  join the array into a string with spaces between each word, return this

function capitalizeWords(string) {
  string = string.toLowerCase();
  const words = string.split(' ');
  for (let i = 0; i < words.length; i++)
    words[i] = words[i][0].toUpperCase() + words[i].slice(1);
  return words.join(' ');
}

// https://evoldyn.gitlab.io/evomics-2018/ref-sheets/R_strings.pdf
// https://www.w3schools.com/js/js_regexp.asp
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_expressions
// notes // ^ didn't work out in any reasonable way, don't wanna spend more time on it
