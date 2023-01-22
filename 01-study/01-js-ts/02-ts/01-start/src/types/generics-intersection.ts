export function mergeObjects<O1, O2>(obj1: O1, obj2: O2): O1 & O2 {
  return { ...obj1, ...obj2 };
}

const obj1 = { name: 'name1', age: 10 };
const obj2 = { name: 'name2' };

const union = mergeObjects(obj1, obj2);

console.log(union);
