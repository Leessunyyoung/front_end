//js026_String.js

let data = 'It`s alrgiht';
console.log(data);

//length : 문자열의 길이
console.log(data.length);

/*
    특정 범위 데이터를 리턴해주는 3가지 메소드
    1.substring(start,end);
    2.substr(start,length);
    3.slice(start,end);
*/

data = 'Apple, Banana, Kiwi';
console.log(`substring : ${data.substring(7, 13)}`); //7~13인덱스미만 substring : Banana
//substring은 음수값을 지원하지 않는다
console.log(`substr : ${data.substr(7, 6)}`);
//substr :  Banana
console.log(`slice : ${data.slice(7, 13)}`);
//slice :Banana
console.log(`slice : ${data.slice(-12, -6)}`);
//slice ->음수값을 지원한다 slice : Banana

//replace('찾을 문자열','바꿀 문자열');
console.log(`replace:${data.replace('Banana', 'Grape')}`);

//Apple,Banana,Kiwi
console.log(data);

//replace('찾을 문자열 | RegExp' , '바꿀 문자열');
// i :대소문자 구분없음 g:모든 문자열
data = 'Mr Blue has a blue house and a blue car';
console.log(data.replace(/blue/, 'red')); // /blue/->dd랑 똑같다
//Mr Blue has a red house and a blue car

data = 'Mr Blue has a blue house and a blue car';
console.log(data.replace(/blue/g, 'red'));
//Mr Blue has a red house and a red car
//g : 발생할 모든 pattern에 대한 전역 검색

data = 'Mr Blue has a blue house and a blue car';
console.log(data.replace(/blue/i, 'red'));
//Mr red has a blue house and a blue car
//i : 대,소문자 구분없음

data = 'Mr Blue has a blue house and a blue car';
console.log(data.replace(/blue/gi, 'red'));
//Mr red has a red house and a red car

data = 'Hello World';
console.log(`toUpperCase() : ${data.toUpperCase()}`); //toUpperCase() : Hello world

console.log(`toLowerCase() : ${data.toLowerCase()}`); //toLowerCase() : hello world

let data2 = 'javascript';
console.log(`concat() : ${data.concat(data2)}`); //concat() : Hello Worldjavascript
console.log(`concat() : ${data.concat(' ', data2)}`); //concat() : Hello World javascript
console.log(`concat() : ${data.concat('_', data2)}`); //concat() : Hello World_javascript

//H
console.log(`charAt(): ${data.charAt(0)}`); //charAt(): H
// 72(unicode value)
console.log(`charCodeAt(): ${data.charCodeAt(0)}`); //charAt(): 72

data = 'a,b,c,d,e';
//split():문자열을 나누어 준다.
let arr = data.split(',');
for (let i of arr) console.log(i);
// a
// b
// c
// d
// e

//match() : 검색데이터와 일치하는 문자열 있으면 문자열 모두를 찾아서 배열로 리턴하고
//          일치하는 문자열이 없으면 null로 리턴한다.
data = 'Mr Blue has a blue house and a blue car';
let res = data.match(/blue/g);
console.log(`match(): ${res} ${typeof res} ${res instanceof Array} `); //match(): blue,blue object true

res = data.match(/red/g);
console.log(`match(): ${res} ${typeof res} ${res instanceof Array} `); //match(): null object false

//search() :검색데이터와 일치하는 문자열이 있으면 처음의 index를 리턴하고
//          일치하는 문자열이없으면 -1을 리턴한다.

res = data.search(/blue/g);
console.log(`search() : ${res}`); //14

res = data.search(/red/g);
console.log(`search():${res}`); //search():-1

//indexOf():문자열의 인덱스를 리턴
console.log(data.indexOf('M')); //0
console.log(data.indexOf('B')); //3

let position = data.indexOf('blue');
console.log(data.indexOf('blue', position + 1)); //31

data = 'Mr Blue has a blue house and a blue car';

let pos = -1;
do {
  pos = pos + 1;
  pos = data.indexOf('blue', pos);
  if (pos != -1) console.log(pos); //14 //31
} while (pos != -1);

data = 'Mr Blue has a blue house and a blue car';
for (let i = 0; i < data.length; i++) {
  i = data.indexOf('blue', i);
  if (i == -1) {
    break;
  }
  console.log(i);
}

//repeat
let text = 'korea';
console.log(text.repeat(10)); //koreakoreakoreakoreakoreakoreakoreakoreakoreakorea

text = '*';
console.log(text.repeat(10)); //**********

let text2 = '   korea   data   ';
console.log(text2.length); //18(공백의 길이까지 합친다)
console.log(text2.trim().length); //12(사이드 공백 안에 공백합친문자열의합)
