type HasHame = { name: string };
type HasLastName = { lastName: string };
type HasAge = { age: number };

type User = HasHame & HasLastName & HasAge; // like AND

const user1: User = {
  name: 'lorem',
  lastName: 'ipsum',
  age: 10,
};

// intersection

type obj1 = 'A' | 'B';
type obj2 = 'A' | 'C';

type obj3 = obj1 & obj2; // 'A'

export default user1;
