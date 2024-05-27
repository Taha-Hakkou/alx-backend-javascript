export default function appendToEachArrayValue(array, appendString) {
  for (const obj of array) {
    const idx = array.indexOf(obj);
    array[idx] = appendString + obj;
  }

  return array;
}

