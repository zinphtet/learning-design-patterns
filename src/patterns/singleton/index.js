import MySingleton from "./singleton.js";

const a = new MySingleton();
const b = new MySingleton();

console.log(a.getRandomNum() , b.getRandomNum())
console.log( "Is Equal",a.getRandomNum() === b.getRandomNum()); // true