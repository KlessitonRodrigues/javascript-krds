function addOrConcat(x: number | string, y: number | string): number | string {
  if (typeof x === 'number' && typeof y === 'number') return x + y;
  return `${x}${y}`;
}

addOrConcat(5, 10);
addOrConcat('A', 'B');
