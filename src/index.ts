export function fn(
  a: () => number,
  b: number,
  c: GetNum,
): void {
  console.log(a() + b + c())
}

export type GetNum = () => number
