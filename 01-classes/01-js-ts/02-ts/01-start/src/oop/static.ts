export class User {
  constructor(private name: string, private id: number) {}

  static sum(x: number, y: number): number {
    return x + y;
  }

  // factory method
  static anonimusUser(id: number): User {
    return new User('', id);
  }
}

User.sum(1, 2);
