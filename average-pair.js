// add whatever parameters you deem necessary
function averagePair(intArray, target) {
  let left = 0;
  let right = intArray.length - 1;

  while (left < right) {
    let avg = ((intArray[left] + intArray[right]) / 2);
    if (avg === target) {
      return true;
    } else if (avg > target) {
      right--; 
    } else {
      left++;
    }
  }
  return false;
}
