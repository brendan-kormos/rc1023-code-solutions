export function fuzeBuzz(limit: number): string[] {
  const newArr = [];
  for (let i = 1; i <= limit; i++) {
    if (i % 15 === 0) {
      newArr.push('LearningFuze');
    } else if (i % 3 === 0) {
      newArr.push('Learning');
    } else if (i % 5 === 0) {
      newArr.push('Fuze');
    } else {
      newArr.push(i.toString());
    }
  }
  return newArr;
}
