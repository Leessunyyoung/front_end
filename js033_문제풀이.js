// js033_문제풀이.js
/*
[문제1]
아래 배열에서 undefined을 제외한 합계와 평균을 계산하는 프로그램을 구현하세요.
[데이터]
let arr = [1, 2, 3, undefined, 4, undefined, undefined, 5];
[출력결과]
합계: 15
평균: 3
*/
let arr = [1, 2, 3, undefined, 4, undefined, undefined, 5];

const newArr = arr.filter((element) => element !== undefined);

function getSum(total, num) {
  return total + num;
}

/*
let result = arr.filter((element) {
  return element != undefined;
});
let sum = result.reduce(function (total,element){
  return total+element;
});
*/
function getAv(total, num) {
  return sum / newArr.length;
}

const sum = newArr.reduce(getSum);
const av = newArr.reduce(getAv);

console.log(`합계:${sum}`);
console.log(`평균:${av}`);

/*
 [문제2] 
  2차원 배열의 데이터를 이용해서 합계와 평균을 계산하는 프로그램을 구현하세요.
 [데이타]
 [['홍길동', 90, 85, 40],
  ['이영희', 100, 35, 75]];
  
 <출력결과]
 [[ '홍길동', 90, 85, 40, 215, '71.67' ],
  [ '이영희', 100, 35, 75, 210, '70.00' ]]
  최고점: 71.67
*/
let name = [
  ['홍길동', 90, 85, 40],
  ['이영희', 100, 35, 75],
];

const newArr1 = name[0].filter((value) => value <= 90);

sum1 = 0;

for (let i = 0; i <= newArr1.length; i++) {
  if (newArr1[i] <= 100) {
    sum1 = newArr1[i] + sum1;
  }
}
avg = sum1 / newArr1.length;

name[0].push(sum1, avg.toFixed(2));

////////////////////////////////////////////////////////////////
const newArr2 = name[1].filter((value) => value <= 100);

sum2 = 0;
for (let j = 0; j <= newArr2.length; j++) {
  if (newArr2[j] <= 100) {
    sum2 = newArr2[j] + sum2;
  }
}
avg1 = sum2 / newArr2.length;
name[1].push(sum2, avg1.toFixed(2));
console.log(name);

console.log(`최고점:${avg.toFixed(2)}`);
/*
let exam =[
  ['홍길동', 90, 85, 40],
  ['이영희', 100, 35, 75],
];

for( let i = 0; i < exam.length ; i++){
  let fullName,jumsu;
  [fullName,...jumsu] = exam[i];
  let hap = jumsu.reduce(function (total,element){
    return total+element;
  });
  exam[i].push(hap);
  exam[i].push((hap /jumsu.length).toFixed(2));
}
console.log(exam);

let lastEle = exam.map((element) => { //여기서 element-> [ '홍길동', 90, 85, 40, 215, '71.67' ]
  return element[element.length -1]; //length -1은 '70.00'을 의미한다.(마지막배열)
});

console.log(`최고점:${Math.max(...lastEle)}`);
*/
