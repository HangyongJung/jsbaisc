var name01 = "Mike";
console.log(name01); // "Mike"

console.log(name02); // "undefined", var는 호이스팅 된다.
var name02 = "Mike";

let name03 = "Mike"
console.log(name03); // "Mike"

console.log(name04); // ERROR, let은 호이스팅되지 않는다.
let name04 = "Mike"

let name05;
console.log(name05); // "undefined"
name05 = "Mike"

const name06;
console.log(name06); // ERROR, const는 할당을 해주어야 한다.

const name07 = "Mike";
console.log(name07); // "Mike"