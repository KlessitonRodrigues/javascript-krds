type Post = {
  title: string;
  text: string;
  date?: Date;
};

const post1: Post = {
  title: 'TITLE',
  text: 'LOREM IPSUM',
  date: new Date(),
};

const post2: Post = {
  title: 'TITLE',
  text: 'LOREM IPSUM',
};

const post3: Post = {
  title: 'TITLE',
  text: 'LOREM IPSUM',
};

console.log(post1.date?.toLocaleString());
console.log(post2.date?.toLocaleString());
console.log(post3.date?.toLocaleString() ?? 'no data informed');
