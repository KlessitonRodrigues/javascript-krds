/* eslint-disable */

let nome: string = 'ok'; // trivially
let name2 = 'ok';

// commom types
let name3: string;
let age: number;
let isBrazilian: boolean;
let sym: symbol;
let bilion: bigint;

// Array
let arr: Array<number>;
let arr2: number[];

let stringArr: Array<string>;
let stringArr2: string[];

// Object
let obj: { name: string; age: number; isOnline: boolean; description?: string };

// Functions
function sum(x: number, y: number): number {
  return x + y;
}

// auto return a number type
function sum2(x: number, y: number) {
  return x + y;
}

// function typed
let sum3: (x: number, y: number) => number = (x, y) => x + y;
