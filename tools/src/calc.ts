export function sum(...vals: number[]): number {
  return vals.reduce((val, total) => (total += val), 0);
}
