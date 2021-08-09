// body === null/HTMLele
const body1 = document.querySelector('body');
if (body1) body1.style.backgroundColor = '#f00';

// Non-null assertion - not recomended
const body2 = document.querySelector('body')!;
body2.style.backgroundColor = '#f00';

// Type assertion
const body3 = document.querySelector('body') as HTMLBodyElement;
body3.style.backgroundColor = '#f00';

// HTMLInputElement
const input = document.querySelector('.input') as HTMLInputElement;
const validationMsg = input.validationMessage;
