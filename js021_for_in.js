// js021_for_in.js

let color = ['red', 'greeb', 'blue'];
console.log(color[0]);
console.log(color[1]);
console.log(color[2]);
console.log(color[3]); //undefined

//length :요소의 개수 리턴

console.log(color.length);

for (let index = 0; index <= 2; index++) {
  console.log(color[index]); //red green blue
}
console.log('===================================');
//배열에 'black'요소 추가
color[3] = 'black';
console.log(color.length); //4

for (let index = 0; index < color.length; index++) {
  console.log(color[index]); //red green blue black
}

//객체 리터널 : {property : value, property :value}
//java :element 를 가져옴
//javascript : index를 가져옴
let city = ['서울', '대구', '부산'];
for (let index in city) {
  console.log(city[index]); //서울 대구 부산 console.log(index) ->출력값 3
}

let obj = { a: 1, b: 2, c: 3 };
console.log(obj); //{ a: 1, b: 2, c: 3 }
console.log(obj.a); //1
console.log(obj.c); //3

for (let prop in obj) {
  //   console.log(prop); //결과값 a b c
  //   console.log(obj[prop]); //1,2,3
  console.log(`${prop}:${obj[prop]}`); //출력값 a:1 b:2 c:3
}

// let num = [2, 3, 4];
// for (let i = 0; i <= num.length; i++) {
//   for (let j = 1; j <= 9; i++) {
//     console.log(num[i], j, num[i] * j);
//   }
// }
