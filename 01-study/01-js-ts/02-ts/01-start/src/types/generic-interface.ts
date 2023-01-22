export interface User<T = string, U = number> {
  name: T;
  lastName: T;
  age: U;
}

const user1: User<string, number> = {
  name: '',
  lastName: '',
  age: 0,
};
