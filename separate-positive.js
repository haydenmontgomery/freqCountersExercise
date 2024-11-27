// add whatever parameters you deem necessary
function separatePositive(arr) {
  let left = 0;
  let right = arr.length - 1;

  while (left < right) {
    console.log(left,right, arr);
    if (arr[left] < 0 && arr[right] < 0) {
      right--;
    } else if (arr[left] > 0 && arr[right] > 0) {
      left++;
    } else if (arr[left] > 0 && arr[right] < 0) {
      right--;
    } else {
      let temp = arr[left];
      arr[left] = arr[right];
      arr[right] = temp;
      right--;
      left++;
    }
  }
  return arr;
}
