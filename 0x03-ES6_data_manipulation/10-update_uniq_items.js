export default function updateUniqueItems(map) {
  if (!(map instanceof Map)) {
    throw Error('Cannot process');
  }
  const myMap = map;
  myMap.forEach((value, key, map) => {
    if (value === 1) { map.set(key, 100); }
  });
  return myMap;
}
