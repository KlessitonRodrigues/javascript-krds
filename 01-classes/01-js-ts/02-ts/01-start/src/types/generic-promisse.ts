export function wait(): Promise<number> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(1);
    }, 1000);
  });
}

wait().then((num) => num.toFixed(2)); // => 1.00