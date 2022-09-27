//약관동의(반드시 체크되어있어야 함)

//commit버튼 눌렀을때
document.frm.onsubmit = () => {
  let admin = document.frm.admin;
  if (!admin.checked) {
    alert('약관에 동의해야 합니다.');
    //check되어있지 않았을때 알림창을 띄움
    return false;
  }
};

//전체선택
document.frm.allCheck.onclick = function () {
  //   console.log(this.checked);
  //체크되어있으면 true 안되어있으면 false
  //   document.frm.subject1.checked = this.checked;
  //   document.frm.subject2.checked = this.checked;
  //   document.frm.subject3.checked = this.checked;
  //전체선택 누르면 p3개가 자동선택됨

  //10개 20개 되어있을때 class속성을 이용한다 Arrow Function
  //this는 상위객체인 document.frm.allCheck를 말한다

  ///////////////////////////////////////////////////////////////////////
  let checkgroup = document.querySelectorAll('.checkgroup');
  console.log(checkgroup.length); //3

  /*checkgroup.forEach((element) => {
    //<input type="checkbox"name="allCheck"id="subject1">
    console.log(this); // ->check객체를 나타냄
    element.checked = this.checked;
  });
  */

  ////////////////////////////////////////////////////////////////
  let mythis = this;
  //this는 document.frm.allCheck를 의미

  //Anonymous Function :this는 Window객체를 의미
  /*checkgroup.forEach(function (element) {
    //console.log(this);
    //Window {window: Window, self: Window, document: document, name: '', location: Location, …}
    element.checked = mythis.checked;
  });
  */
  ///////////////////////////////////////////////////////////
  // Array.from() : NodeList를 Array로 변경
  //map이용할려면 node리스트를 배열로 사용
  /*
  console.log(`${checkgroup}`);
  //[object NodeList]

  let myArray = Array.from(checkgroup);
  console.log(`${myArray}`);
  //[object HTMLInputElement],[object HTMLInputElement],[object HTMLInputElement]
  myArray.map(function (element) {
    console.log(this);
    //this는 window다
    element.checked = mythis.checked;
  });
  */

  ////////////////////////////////////////////////////
  ///ES6 Spread Operator : NodeList를 Array로 변경
  let iArray = [...checkgroup];
  //   console.log(iArray);
  //(3) [input#subject1.checkgroup, input#subject2.checkgroup, input#subject3.checkgroup]
  iArray.map(function (element) {
    // sconsole.log(this);
    element.checked = mythis.checked;
  });
};
