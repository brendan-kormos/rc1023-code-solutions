export function isAnagram(firstString: string, secondString: string): boolean {
  const firstSorted = sortCharacters(removeSpaces(firstString));
  const secondSorted = sortCharacters(removeSpaces(secondString));

  return firstSorted === secondSorted;

  function removeSpaces(string: string): string {
    let withoutSpaces = '';
    for (let i = 0; i < string.length; i++) {
      if (string[i] !== ' ') {
        withoutSpaces += string[i];
      }
    }
    return withoutSpaces;
  }

  function sortCharacters(string: string): string {
    return string.split('').sort().join('');
  }
}
