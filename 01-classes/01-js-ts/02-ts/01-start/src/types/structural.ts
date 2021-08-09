type User = { name: string; password: number };
type Employer = { name: string; password: number; permissions: string[] };

type LoginFn = (user: User, login: User) => boolean;

export const login: LoginFn = (user: User, login: User): boolean => {
  return user.name === login.name && user.password === user.password;
};

const user1: User = { name: 'lorem', password: 123 };
const employer1: Employer = {
  name: 'lorem',
  password: 123,
  permissions: ['values', 'stock'],
};
const formLogin: User = { name: 'lorem', password: 123 };

// TypeScript don't compare types only rules
login(user1, formLogin);
login(employer1, formLogin);
