// Record<key, value>
export const obj: Record<number, string> = {
  1: 'a',
  2: 'ab',
  3: 'abc',
};

type User = {
  name?: string;
  id?: number;
};

// Required
const user1: Required<User> = {
  name: '',
  id: 1,
};

// Parcial
const user2: Partial<User> = {};

// Readonly
const user3: Readonly<User> = {
  name: '',
  id: 1,
};

// Pick
const user4: Pick<User, 'name'> = {
  name: '',
};

// Exclude - Extract
type ABC = 'A' | 'B' | 'C';
type CDE = 'C' | 'D' | 'E';
type ABCExtract = Exclude<ABC, CDE>; // => "A" | "B"
type ABCExclude = Extract<ABC, CDE>; // => "C"
