export type AttributeOf = <T, U extends keyof T>(obj: T, key: U) => T[U];

const attributeOf: AttributeOf = (obj, key) => obj[key];

const user = { name: '', age: 0 };


attributeOf(user, "name")
attributeOf(user, "age")