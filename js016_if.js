/*
제어문(statement) : 프로그램의 흐름을 제어할 수 있는 실행문이다.
 1. 조건문 : if ~ else
 2. 선택문 : swtich ~case
 3. 반복문 : for ,while,do ~while,for ~in
 4. label(임의로정의),continue,break

 조건문 :조건식의 값이 참인지 아니면 거짓인지에 따라 실행문의 제어가 결정된다.

 if문은 조건식이 만족(true)할 경우에만 실행문을 실행한다
 if(조건식){
    실행문;
 }
*/

let data = 0;
if (data == 0) {
  console.log(`program end`);
}
// null ,undefined, "" ,0,false =>false
if (10) {
  console.log('10');
}

if (null) {
  console.log('data');
}

/*
if (조건식) {
    실행문;
} else {
  실행문;  
}
*/
let num = 5;
if (num % 2 == 0) {
  console.log(`${num}의 값은 짝수입니다`);
} else {
  console.log(`${num}의 값은 홀수입니다`);
}

if (num % 3) {
  console.log(`${num}의 값은 홀수입니다`);
} else {
  console.log(`${num}의 값은 짝수입니다`);
}
/*
if (조건식) {
    실행문1;
} else if(조건식2) {
  실행문2;  
} else if(조건식3) {
  실행문3;  
} else{
    실행문;
}
 */

let jumsu = 59;
if (jumsu >= 90) {
  console.log('A');
} else if (jumsu >= 80) {
  console.log('B');
} else if (jumsu >= 70) {
  console.log('C');
} else if (jumsu >= 60) {
  console.log('D');
} else {
  console.log('fail');
}

/*check변수의 값이 'D' => D는 대문자입니다.
                  'd' =>d는 소문자입니다.
                  그외 => ?는 기타입니다.
*/
//'a'=97 'A' =65 '0'=48

let check = 'd';
if (check >= 'A' && check <= 'Z') {
  console.log(`&{check}는 대문자입니다.`);
} else if (check >= 'a' && check <= 'z') {
  console.log('d는 소문자입니다.');
} else {
  console.log(' ?는 기타입니다.');
}

let check1 = 'D';
if (check1 == 'D') {
  console.log('D는대문자입니다.');
} else if (check1 == 'd') {
  console.log('d는 소문자입니다.');
} else {
  console.log(' ?는 기타입니다.');
}

let x = 'A';
console.log(x > 'A' && x <= 'Z');

let y = 'a';
console.log(y >= 'a' && y <= 'z');
