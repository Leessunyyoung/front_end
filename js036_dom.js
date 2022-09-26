let pNode = document.getElementById('wrap');
console.log(`${pNode.nodeType} , ${pNode.nodeName} ,${pNode.nodeValue}`);
//1 , P ,null

// let pAttr = pNode.getAttribute('id');
// console.log(pAttr);//wrap

//속성명
let pAttr = pNode.attributes;
console.log(pAttr);
//NamedNodeMap {0: id, 1: class, id: id, class: class, length: 2}

//id
console.log(pAttr[0]);
//id='wrap'
console.log(pAttr.id);
//id='wrap'
console.log(pAttr.length);
//2
console.log(`${pAttr[0].nodeType},${pAttr[0].nodeName},${pAttr[0].nodeValue}`);
//2,id,wrap

let pIdAttr = pNode.getAttribute('id');
console.log(pIdAttr); //wrap ->속성값을 가져와준다

let textNode = pNode.firstChild;
console.log(textNode);
//"content"

console.log(`${textNode.nodeType},${textNode.nodeName},${textNode.nodeValue}`);
//3,#text,content
//nodeType 3이면 text타입니다

//////////////////////////////
//innerText,innerHTML : 요소의 컨텐츠

let bodyNode = document.getElementsByTagName('body')[0];
console.log(bodyNode.innerText); //content

console.log(bodyNode.innerHTML);

//////////////////////////////////
//value
let fname = document.querySelector('#fname');
console.log(fname.value); //홍길동
