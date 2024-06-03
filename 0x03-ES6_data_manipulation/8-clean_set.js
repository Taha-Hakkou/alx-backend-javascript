export default function cleanSet(set, startString) {
  return Array.from(set)
    .filter((x) => x.startsWith(startString) && startString.length > 0)
    .map((x) => x.substring(startString.length))
    .join('-');
}
