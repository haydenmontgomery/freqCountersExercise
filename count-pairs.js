// add whatever parameters you deem necessary
function countPairs(intArr, target) {
  const seen = new Set();
  let count = 0;

  for (let num of intArr) {
    const complement = target - num;

    if (seen.has(complement)) {
      count++;
    }

    seen.add(num);
  }
  return count;
}
