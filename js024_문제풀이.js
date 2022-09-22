/*
 문제1
 <프로그램 실행결과>
  주어진 배열에서 3의 배수의 개수=> 6
  주어진 배열에서 3의 배수의 합=> 108
  */

let arr = [1, 3, 5, 8, 9, 11, 15, 19, 18, 20, 30, 33, 31];

//주어진 arr배열에서 3의 배수를 구해서 리턴하는 함수 정의

//내가한거

// function process(arr) {
//   let three = [];
//   for (let j = 1; j < arr.length; j++) {
//     if (arr[j] % 3 == 0) {
//       three.push(arr[j]);
//     }
//   }
//   return three;
// }
// console.log(`주어진 배열에서 3의 배수=>${process(arr)}`);

//수업

function process(arr) {
  let data = [];
  for (let j = 1; j < arr.length; j++) {
    if (arr[j] % 3 == 0) {
      data[data.length] = arr[j];
    }
  }
  return data;
}
console.log(process(arr));

//주어진 arr배열에서 3의 배수의 갯수를 리턴하는  함수 정의

//내가한거

// function count(process) {
//   cnt = 0;
//   for (let j = 1; j < arr.length; j++) {
//     if (arr[j] % 3 == 0) {
//       cnt++;
//     }
//   }
//   return cnt;
// }
// console.log(`주어진 배열에서 3의 배수의 개수=>${count(process)}`);

//수업시간에 한거

function count(process) {
  return process.length;
}

console.log(count(process(arr)));

//주어진 arr배열에서 3의 배수 합을 리턴하는 함수 정의
// function arrPlus(process) {
//   sum = 0;
//   for (let j = 1; j < arr.length; j++) {
//     if (arr[j] % 3 == 0) {
//       sum = arr[j] + sum;
//     }
//   }
//   return sum;
// }

//수업

function arrPlus(process) {
  let sum = 0;
  for (let j = 1; j < arr.length; j++) {
    sum = arr[j] + sum;
  }
  return sum;
}
console.log(arrPlus(process(arr)));
/*
    [문제2]
    [출력결과]
    javascript
    tpircsavaj
    javascript
    */

let alpa = ['j', 'a', 'v', 'a', 's', 'c', 'r', 'i', 'p', 't'];

//alpa배열의 요소를  reverse한 후 리턴하는 함수 정의

function reverse(alpa) {
  newArr = [];
  for (let i = alpa.length - 1; i >= 0; i--) {
    newArr.push(alpa[i]);
  }
  return newArr;
}
console.log(`${reverse(alpa)}`);

//data배열의 출력하는  함수 정의
// function display(data) {
//   return data;
// }

// console.log(`${display(alpa)}`);

function display(data) {
  for (let i = 0; i < data.length; i++) {
    process.stdout.write(data[i]);
    process.stdout.wrtie('\n');
  }

  return data;
}
