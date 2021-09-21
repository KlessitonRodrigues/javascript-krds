namespace space1 {
  export const name = 'space 1';

  export class User {
    constructor(public readonly id: number, public name: string) {}
  }

  export namespace space2 {
    export const name = 'space 2';
  }
}

space1.name;

new space1.User(1, 'user1');

space1.space2.name;
