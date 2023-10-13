export function intervalValue(value: number, min: number, max: number): number {
  if (value < min) {
    value = min;
  } else if (value > max) {
    value = max;
  }
  return value;
}
