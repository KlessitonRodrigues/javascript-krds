// ERROR: don't use {} or object as type
// Record<string, unknown> = keys (string), values (unknown)

const obj2: {
  keyA: 'A';
  keyB: 'B';
} = {
  keyA: 'A',
  keyB: 'B',
};

obj2;

// ERROR: key C has not created
// obj2.keyC = 'C';

// Optional key C
const obj3: {
  keyA: 'A';
  keyB: 'B';
  keyC?: 'C';
} = {
  keyA: 'A',
  keyB: 'B',
};

obj3.keyC = 'C';
obj3;

// Record key C
const obj4: {
  keyA: 'A';
  keyB: 'B';
  [key: string]: unknown;
} = {
  keyA: 'A',
  keyB: 'B',
};

obj4.keyC = 'C';
obj4;

// Read Only
const obj5: {
  readonly keyA: string;
} = {
  keyA: 'A',
};

obj5;
