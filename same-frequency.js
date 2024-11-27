// add whatever parameters you deem necessary
function sameFrequency(int1, int2) {
  let str1 = int1.toString(); 
  let str2 = int2.toString(); 

  if (str1.length !== str2.length) return false;

  const digMap1 = getFrequency(str1);
  const digMap2 = getFrequency(str2); 

  for(let dig of digMap1.keys()) {
    if(digMap2.get(dig) !== digMap1.get(dig)) return false;
  }
  return true;
}

function getFrequency(str) {
  let frequencies = new Map();

  for (let val of str) {
    let valCount = frequencies.get(val) || 0;
    frequencies.set(val, valCount + 1);
  }

  return frequencies;
}