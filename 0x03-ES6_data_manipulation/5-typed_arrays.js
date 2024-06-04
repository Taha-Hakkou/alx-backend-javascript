export default function createInt8TypedArray(length, position, value) {
  if (position >= length) throw Error('Position outside range');
  const typedArray = new DataView(new ArrayBuffer(length));
  typedArray.setInt8(position, value);
  return typedArray;
}
