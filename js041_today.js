// let chk = true;
// let btn = document.getElementsByTagName('button')[0];
// let myNode = document.getElementById('p1');
// let ptNode = myNode.parentNode;

// console.log(myNode);

// btn.onclick = process;

// let data = new Date();

// function process() {
//   if (chk) {
//     myNode.innerText = data;
//   }
// }
let dateBtnNode = document.getElementsByTagName('button')[0];
dateBtnNode.onclick = () => {
  let pNode = document.getElementById('p');

  let today = new Date();
  let year = today.getFullYear();
  let month = today.getMonth() + 1;
  let date = today.getDate();
  let hour = today.getHours();
  let minute = today.getMinutes();
  let second = today.getSeconds();

  pNode.innerText = `${year}-${month}-${date}   ${hour}:${minute}:${second}`;
};
