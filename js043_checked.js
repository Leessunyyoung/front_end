let totalCar = document.getElementById('total');

let chbCnt = document.querySelectorAll('tbody input[type="checkbox"]');
console.log(chbCnt);

//NodeList를 Array로 변환
let myChb = [...chbCnt];

//checkbox에 onclick이벤트가 발생되었을때 수행될 carCount()를 등록
myChb.map((element) => {
  //   console.log(this);  //this->window
  element.onclick = carCount;
});

function carCount() {
  //현재 이벤트가 발생된 checkbox 객체를 나타냄
  //   console.log(this);
  let basicCar = Number(totalCar.defaultValue);
  //value값 string으로 가져오기 13450000

  //check눌렀을때 value누적값 구하기
  //this를 쓰면 누적값을 구하지못한다.
  myChb.map((element) => {
    if (element.checked) basicCar += Number(element.value);
  });
  totalCar.value = basicCar;
}
