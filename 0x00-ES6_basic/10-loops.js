export default function appendToEachArrayValue(array, appendString) {
  for (let obj of array) {
    let idx = array.indexOf(obj);
    array[idx] = appendString + obj;
  }

  return array;
}

