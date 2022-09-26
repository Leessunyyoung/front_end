// js034_dom.js
// window.onload = function (){
// let hNode = document.getElementById('selector');
// console.log(hNode);
// };

let hNode = document.getElementById('selector');
console.log(hNode, typeof hNode);

let hId = document.querySelector('#selector');
console.log(hId, typeof hId);

let hClass = document.querySelector('.choice');
console.log(hClass, typeof hClass);

//HTMLCollection(4)
let pNode = document.getElementsByTagName('p');
console.log(pNode, typeof pNode);
console.log(pNode.length); //4
console.log(pNode[0], pNode.item(0));
{
  /* <p style ="background-color:blue;">content1</p> */
}
console.log(pNode[0].innerText); //content1

pNode[0].style.backgroundColor = 'blue';

function process() {
  alert('dd');
  let fname = document.frm.fname;
  console.log('fname:', fname);
  console.log(fname.value);
  console.log(fname.defaultValue);

  //   [object HTMLInputElement]
  document.write(fname);
  return false; //액션이벤트를 실행하지 못하도록 false
}
