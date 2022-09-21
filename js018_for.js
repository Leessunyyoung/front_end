// js018_for.js
/*
    for문
    for문은 조건식을 만족할 때까지 특정 실행문을 반복해서 실행한다.
    for(초기값;조건식;증감식){
        실행문;

    초기값 -> 조건식(true) ->실행문 ->증감식
          -> 조건식(true) ->실행문 -> 증감식
          -> 조건식(false) ->반복문 빠져나감
    }
*/
for (let i = 1; i <= 5; i++) {
  console.log(i);
}

console.log('=========================');
console.log(1);
console.log(2);
console.log(3);
console.log(4);
console.log(5);

console.log('=========================');
//for문에서 조건식을 생략하면 무한루프가 돌아간다.
// let i, sum;

for (i = 1, sum = 0; ; i++) {
  sum += i;
  if (sum >= 30) {
    break;
  }
}
console.log(`i =${i} sum = ${sum}`);

console.log('======================');
//1~10 짝수와 홀수의 합을 구해라

let j, odd, even;
odd = 0;
even = 0;

for (j = 1; j <= 10; j++) {
  if (j % 2 == 0) {
    odd += j;
  } else {
    even += j;
  }
}
console.log(`짝수 : ${odd} 홀수 : ${even}`);

console.log('=============================');

/*
continue: 반복문에서 continue를 만나면 루프문의 다음코드를 실행한다.
for(초기식;조건식;증감식){continue;}
while(조건식){continue;}
*/

for (let i = 1; i <= 10; i++) {
  if (i % 3 == 0) {
    continue;
  }
  console.log(i);
}

console.log('=============================');

/*
중첩반복문
 for(초기값;조건식;증감식){
     for(초기값;조건식;증감식){
        실행문;}
    }
}
*/
for (let i = 1; i <= 3; i++) {
  for (let j = 1; j <= 3; j++) {
    process.stderr.write(`i = ${i} j = ${j}  `);
  }
  process.stderr.write('\n');
}
//https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/String
//이스케이프 : 프로그램에서 주변장치를 컨트롤하기 위해서 사용되는 기능
// \n :줄바꿈, \t:탭 , \", \' , \b:백스페이스 \v : 수직탭

console.log('=============================');
//label 정의

movei: for (let i = 1; i <= 5; i++) {
  for (let j = 10; j <= 13; j++) {
    for (let k = 1; k <= 3; k++) {
      console.log(`k=${k}, j=${j}, k=${k} `);
      if (k == 2) break movei;
    }
  }
}

for (let i = 1; i <= 5; i++) {
  console.log(i);
}

console.log('=============================');
let j1 = 1;
while (j1 <= 5) {
  console.log(j1);
  j1++;
}
/*
do{
    실행문;
}while(조건식);
*/
for (let i = 3; i <= 1; i++) {
  console.log(i);
}
let input = 'n';
do {
  console.log('고객님 주문하시겠습니까?(y/n)');
  input = prompt('입력');
} while (input == 'y');
