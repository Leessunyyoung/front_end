// js033_Date.js

let data = new Date();
console.log(data); //2022-09-26T01:09:56.814Z
//브라우저에 띄었을때 Mon Sep 26 2022 10:15:11 GMT+0900(한국 표준시)
console.log(data.getFullYear()); //년도  2022
console.log(data.getMonth() + 1); //월(+1을 꼭 해줘야한다) 9
console.log(data.getDate()); //일 26
console.log(data.getDay()); //요일(숫자로 나온다)0->일요일, 1->월요일
