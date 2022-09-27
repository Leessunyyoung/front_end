//(1) 작은 이미지를 클릭하면 큰 이미지 보이게
let bigPhoto = document.querySelector('#photo > img');
console.log(bigPhoto);
//<img src="../images/pic_1.jpg" width="320" alt="" />

let list_zone = document.querySelector('#inner_list');
let ul_li = list_zone.children;
console.log(ul_li);
//HTMLCollection(8) ->8개의 이미지

//HTMLCollection이면 배열로 바꿔야된다

ul_li = [...ul_li]; //ul_li = Array.from(ul_li);

ul_li.map((liTag, idx) => {
  let aTag = liTag.querySelector('a');
  aTag.onclick = (e) => {
    bigPhoto.src = aTag.href;
    return false; //e.preventDefault();
    //return false 할려면 onclick = '(e)'꼭쓴다
  };
});

//(2) 다음 ( > )버튼을 클릭할때마다 <li>이 -100만큼 이동하게 한다
//다음버튼부터 해야된다

let m_num = 0; //클릭한횟수 저장하기

let b_btn = document.querySelector('#next_btn');
b_btn.onclick = (e) => {
  if (m_num >= ul_li.length - 3) return false;
  m_num++;
  // 객체.스타일.margin
  list_zone.style.marginLeft = -100 * m_num + 'px';
  return false; //e.prventDefault();
};

//(3) 이전( < )버튼 클릭할때 마다 <li>이 100만큼 이동하게 한다.
let before_btn = document.querySelector('#before_btn');
before_btn.onclick = (e) => {
  if (m_num <= 0) return false;
  m_num--;
  list_zone.style.marginLeft = -100 * m_num + 'px';
  return false; //e.prventDefault();
};
