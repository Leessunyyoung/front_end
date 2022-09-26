let myNode = document.getElementById('p2');

//parentNode
let ptNode = myNode.parentNode;
//<div id="wrap"></div>
console.log(ptNode);

//parentNode:[object HTMLBodyElement]
console.log(`parentNode:${ptNode}`);
ptNode.style.color = 'blue';

////////////////////////////////////////
//previousSbling

let prevNode = myNode.previousSibling;
console.log(`prevNode:${prevNode}`);
//prevNode:[object Text]

prevNode = prevNode.previousSibling;
console.log(`prevNode:${prevNode}`);
//prevNode:[object HTMLDivElement]

///////////////////////////////////////
///newSibling
let nextNode = myNode.nextSibling;
console.log(`nextNode = ${nextNode}`);
//[objext text]

nextNode = nextNode.nextSibling;
console.log(`nextNode = ${nextNode}`);
// [object HTMLParagraphElement]
console.log(`nextNode:${nextNode},nextNode.innerText`);
// [object HTMLParagraphElement],nextNode.innerText

/////////////////////////
//previousElementSibling
let preEleNode = myNode.previousElementSibling;
console.log(`preEleNode:${preEleNode},${preEleNode.innerText}`);
// preEleNode:[object HTMLParagraphElement],content1

//////////////////////////
//nextElementSibling
let nextEleNode = myNode.nextElementSibling;
console.log(`nextEleNode:${nextEleNode},${nextEleNode.innerText}`);
// nextEleNode:[object HTMLParagraphElement],content3

/////////////////////////////
//childNodes
let divNode = document.getElementById('wrap');
console.log(`divNode :${divNode}`);
//[object HTMLDivElement]

let divChildesNode = divNode.childNodes;
console.log(`divChildesNode : ${divChildesNode}`);
// divChildesNode : [object NodeList]
console.log(divChildesNode);
//[text, div#p1, text, div#p2, text, div#p3, text]

//////////////////////////////
//children
let divChildren = divNode.children;
console.log(`divChildren:${divChildren}`);
//[object HTMLCollection]
console.log(divChildren);
//[p#p1, p#p2, p#p3, p1: p#p1, p2: p#p2, p3: p#p3]

console.log(divChildren[0]);
// <p id="p1">content1</p>
console.log(divChildren.item(0));
// <p id="p1">content1</p>
console.log(divChildren.namedItem('p1'));
//// <p id="p1">content1</p>

let pNode = document.getElementById('p4');
let aNode = pNode.firstChild;
//#text
console.log(aNode);

aNode = pNode.firstElementChild;
console.log(aNode);
// <img src="images/gosu.jpg" alt="배우고수" />

////////////////////////////
///getAttribute("속성명"),setAttribute("속성명","깂")
//객체.속성명 , 객체.속성명 = "값"

let aAttrNode = aNode.getAttribute('src');
console.log(aAttrNode);
//images/gosu.jpg

aAttrNode = aNode.src;
console.log(aAttrNode);
//http://127.0.0.1:5500/images/gosu.jpg

aNode.setAttribute('title', '스타배우');
console.log(aNode.getAttribute('title'));
//스타배우

aNode.id = 'imgGosu';
console.log(aNode.id);
//imgGosu
