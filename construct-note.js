// add whatever parameters you deem necessary
function constructNote(message, letters) {
  if(message === '') {
    return true;
  } else if(letters === ''){
    return false;
  }
  if(message.length > letters.length) return false;

  const messageMap = getFrequency(message);
  const lettersMap = getFrequency(letters);

  for (let letter of lettersMap.keys()) {
    if(messageMap.get(letter) > lettersMap.get(letter)) return false;
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