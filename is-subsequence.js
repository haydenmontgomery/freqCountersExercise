// add whatever parameters you deem necessary
function isSubsequence(strFit, strFull) {
  let matchCount = 0;
  let matchNeeded = strFit.length;
  for (let i = 0; i < strFull.length; i++) {
    if(strFit[matchCount] === strFull[i]) {
      matchCount++;
      if (matchNeeded === matchCount) return true;
    }
  }
  return false;
}
