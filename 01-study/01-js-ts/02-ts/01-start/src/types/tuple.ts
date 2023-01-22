/* eslint-disable */

const data: [number, string] = [1, 'name'];
const data2: [number, string, string?] = [1, 'name', 'lastName'];
const data3: [number, ...string[]] = [1, 'name', 'lastName'];

data[0] = 2;
data[1] = 'name2';

// Avoid pop and push on Tuples with readOnly

const data4: readonly [number, string] = [1, 'name'];
const data5: ReadonlyArray<string> = ['name', 'lastName'];

// data4.pop();
// data4.push('description');
