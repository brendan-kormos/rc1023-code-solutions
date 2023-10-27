/* exported getWords */
function getWords(string) {
  return string.split(' ').filter((word) => word !== '');
}
