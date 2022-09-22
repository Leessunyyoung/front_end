// js025_Number.js

let data = 10;
let fData = Number(data);
//객체생성
let nObj = new Number(data);
console.log(`data = ${typeof data}`); //number
console.log(`fData = ${typeof fData}`); //number
console.log(`nObj = ${typeof nObj}`); //object

//숫자를 문자로
console.log(typeof nObj.toString()); //string
console.log(typeof data.toString()); //string

console.log(data + fData); //20
console.log(data + nObj); //20

//Number ->number
//valueOf() : object -> primitive
console.log(typeof nObj.valueOf()); //number
console.log(typeof new String('javascript').valueOf()); //string

console.log(parseInt('10'));

//let val = '10.0'; //20 20 20
// let val = '10.3';//20.6 20 20.6
// let val = 'A'; //->NaN NaN NaN
// let val = '10A';//NaN 20 20
let val = 'A10'; //NaN NaN NaN
console.log(val + val); //1010

//Number(),parseInt()
console.log(Number(val) + Number(val));
console.log(parseInt(val) + parseInt(val)); //정수로 나온다
console.log(parseFloat(val) + parseFloat(val)); //실수로 나온다

console.log(Number.POSITIVE_INFINITY); // Infinity 양의 무한대를 나타내는 특수한 값. 오버플로우 시 반환됩니다.
console.log(Number.NaN); //NaN Not a Number
