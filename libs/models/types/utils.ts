// Return an enum as an iterable of the string keys
// for convenience this method defines data as 'any' but it should be a ts enum
export function enumAsArray(data: any): String[] {
  return Object.keys(data).filter((v) => isNaN(Number(v)));
}
