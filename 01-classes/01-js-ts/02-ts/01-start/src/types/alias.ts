type Age = number;
type Name = string;

type ColorRGB = 'red' | 'green' | 'blue';
type ColorCMYK = 'cyan' | 'magenta' | 'yellow' | 'black';

type Color = ColorRGB | ColorCMYK;

type User = {
  name: Name;
  lastName: Name;
  age: Age;
  userColor?: Color;
};

function setUserColor(user: User, color: Color): User {
  return { ...user, userColor: color };
}

const user1: User = {
  name: 'Lorem',
  lastName: 'Ipsum',
  age: 20,
};

setUserColor(user1, 'black');

export default 1;
