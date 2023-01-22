function noReturn(...args: string[]): void {
  console.log(args.join(' '));
}

const obj1 = {
  name: 'k',
  lastName: 'r',

  showFullName(): void {
    console.log(this.name + ' ' + this.lastName);
  },
};

noReturn('a', 'b', 'c');

obj1.showFullName();
