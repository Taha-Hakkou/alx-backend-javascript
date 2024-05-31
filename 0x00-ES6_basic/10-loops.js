export default function appendToEachArrayValue(array, appendString) {
  const newArray = [];
  for (const obj of array) {
    newArray.push(appendString + obj);
  }
  return newArray;
}
