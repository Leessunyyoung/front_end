document.querySelector('.red').onclick = (e) => {
  alert('red');
};

document.querySelector('.green').onclick = (e) => {
  alert('green');
  e.stopPropagation();
};

document.querySelector('.blue').onclick = (e) => {
  alert('blue');
  console.log(e); //PointerEvent
  e.stopPropagation();
  //   return false; //jquery에서만 작동
};

document.querySelector('a').onclick = (e) => {
  alert('안녕하세요');
  //   e.preventDefault(); //페이지로 넘기지않게 default한다
  return false;
};

/*
[1] Event Propagation(이벤트전파)
①캡쳐링(capturing phase) :부모요소에서 Target요소로 이벤트 전파
②버블링(bubbling phase) :Target요소에서 부모요소로 이벤트 전파

[2] 이벤트 차단
stopPropagation()

[3]stopPropagation()와 preventDefault() 비교
    stopPropagation():이벤트 전파 차단 return false(jqeury)
    preventDefault():defualt 이벤트 차단 return false(javacsript,jquery)


 */
