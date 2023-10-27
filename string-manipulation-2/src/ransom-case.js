/* exported ransomCase */
//  define a function named ransomeCase with one parameter, string
//    assign an empty string to a variable called ransomString
//    create a loop to iterate through each character in string:
//      check if the iteration count is even, if so, convert the current current string to lowercase and concatenate it with ransomString
//      if it's odd, convert the current character to uppercase and concatenate it with ransomString
//  return ransomString
function ransomCase(string) {
  let ransomString = '';
  for (let i = 0; i < string.length; i++) {
    if (i % 2 === 0) ransomString += string[i].toLowerCase();
    else ransomString += string[i].toUpperCase();
  }
  return ransomString;
}
