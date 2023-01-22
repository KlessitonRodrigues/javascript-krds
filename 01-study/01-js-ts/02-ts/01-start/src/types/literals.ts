/* eslint-disable */

// number subtype
export const x: 1000 = 1000;

// string subtype
export let y = 2000 as const;

const user = {
  name: 'lorem' as const,
  lastNAme: 'ipsun',
};

// function parameters
function getColors(color: 'red' | 'blue' | 'green'): string {
  return color;
}

getColors('green')
