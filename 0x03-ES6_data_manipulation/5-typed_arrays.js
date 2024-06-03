export default function createInt8TypedArray(length, position, value) {
  const typedArray = new DataView(new ArrayBuffer(length));
  if (position < 0 || position >= typedArray.length) {
    throw Error('Position outside range');
  }
  typedArray.setInt8(position, value);
  return typedArray;
}
