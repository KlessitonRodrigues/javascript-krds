let x: any;
x = 10;
x = '10';

// without type check
x += 10;

let y: unknown;
y = 10;
y = '10';

// type check is required for type unknown
if (typeof y === 'number') y += 10;
