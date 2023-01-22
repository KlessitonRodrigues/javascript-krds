export function sum(x: number, y: number, z?: number): number {
  // z will can be number or undefined
  return x + y + (z || 0);
}

console.log(sum(1, 2));

// not use this
export function sub(x: number, y: number, z: any) {
  if (typeof z !== 'number') return null;

  return x - y - z;
}
