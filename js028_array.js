// js028_array.js

let scores = [100, 90, 100];
console.log(scores); //[ 100, 90, 100 ] Array(3)

console.log(scores[0]); //100
console.log(scores[1]); //90
console.log(scores[2]); //100
console.log(scores[3]); //undefined
console.log(scores.length); //3

let person = ['John', 'Doe', 26, true];
// John string
// Doe string
// 26 number
// true boolean
for (let idx in person) {
  console.log(person[idx], typeof person[idx]);
}

let student = ['홍길동', [100, 90, 20]];

//홍길동 string
// [ 100, 90, 20 ] object
for (let idx in student) {
  console.log(student[idx], typeof student[idx]);
}

let cars = new Array('Sasb', 'Volvo', 'BMW');
// Sasb string
// Volvo string
// BMW string
for (let idx in cars) {
  console.log(cars[idx], typeof cars[idx]);
}

let color = [];
console.log(color.length); //0
color[0] = 'red';
console.log(color.length); //1
color.push('green');
console.log(color.length); //2
color.push(759);
console.log(color.length); //3
color[8] = 'blue';
console.log(color.length); //9
console.log(color); //[ 'red', 'green', 759, <5 empty items>, 'blue' ]
for (let idx in color) {
  console.log(`${idx} : ${color[idx]}`); //0 : red
  //                                       1 : green
}

//3개의 크기를 가진 배열을 생성
let point = new Array(3);
console.log(`point length : ${point.length}`); //point length : 3
console.log(point); //[ <3 empty items> ]

//2개의 요소를 가진 배열을 생성
let shape = new Array(10, 20);
console.log(`shape length : ${shape.length}`); //shape length : 2
for (let idx in shape) {
  console.log(`${idx} : ${shape[idx]}`); //0 : 10
  // 1 : 20
}
shape[2] = 50; //요소 추가
console.log(shape[1]); //요소 가져오기
console.log(shape.length); //갯수 조회

/*
for()
for ~ in :index
for ~ of :element

for idx in 배열 ;
*/

//forEach():배열 전용메소드
//배열.forEach(function(element[,index])) {수행할문장}; ->index생략가능
shape.forEach(function (element, index) {
  // 0 : 10
  // 1 : 20
  // 2 : 50
  console.log(`${index} : ${element}`);
});

shape.forEach((element, index) => {
  // 0 : 10
  // 1 : 20
  // 2 : 50
  console.log(`${index} : ${element}`);
});

let choice = 'javascript';
//문자열은 forEach()를 제공하지 않으므로 사용할 수 없다.
//TypeError: choice.forEach is not a function
choice.forEach(function (element, index) {
  console.log(`${index}:${element}`);
});

//배열명.map(callback);
const numbers = [4, 9, 16, 25];
const res = numbers.map(function (element, index) {
  return element * 2;
});
console.log(`res : ${res}`); //res : 8,18,32,50

const sqt = numbers.map(Math.sqrt);
console.log(`sqt : ${sqt}`); //sqt:2, 3, 4, 5

function getSum(total, num) {
  //total :누적 ,num :요소
  return total + num;
}
const sum = numbers.reduce(getSum);
console.log(`sum = ${sum}`); //sum=54

// numbers.reduce(getSum){
//     let total = 0;
//     for(let i=0;i<numbers.length;i++){
//     total = getSum(total,num);
//     }
//     return total;

// };

const ages = [32, 33, 16, 40];
const per = ages.filter(function (element, index) {
  return element >= 18;
});

// per : 32,33,40

console.log(`per : ${per}`);

// map :누적 다 출력 reduce:한개만출력 filter:조건에맞는 출력
