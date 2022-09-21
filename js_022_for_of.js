// js_022_for_of.js

//for ~ of :element를 가져옴
let color = ['red', 'green', 'blue'];
for (let element of color) {
  console.log(element);
}

let subject = 'script';
for (let idx in subject) {
  console.log(idx); //출력값 0 1 2 3 4 5
}
for (let element of subject) {
  console.log(element); //출력값 s c r i p t
}

console.log('===========================');
let obj = { a: 1, b: 2, c: 3 };
for (let value of obj) {
  console.log(value); //obj is not iterable
}
/*
     for ~ of문은 반복 가능한 객체(Array,String,Map,Set,argumnets)를 반복하는 객체
     즉,iterable속성을 가진 객체만 가능
*/
