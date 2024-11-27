// add whatever parameters you deem necessary
function twoArrayObject(arrKeys, arrVals) {
  let object = {}
  let i = 0
  while(true) {
    if (i >= arrKeys.length) break;
    if (i >= arrVals.length) {
      object[arrKeys[i]] = null;
    } else {
      object[arrKeys[i]] = arrVals[i];
    }
    i++;
  }
  return object;
}
