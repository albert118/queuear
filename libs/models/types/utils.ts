// Return an enum as an iterable of the string keys
// for convenience this method defines data as 'any' but it should be a ts enum
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function enumAsArray(data: any): string[] {
  return Object.keys(data).filter((v) => isNaN(Number(v)));
}
