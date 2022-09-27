// js040_select.js
document.frm.onsubmit = () => {
  let optFruit = document.frm.fruit;
  console.log(optFruit);
  //<select name="fruit" id="sel"...</select>
  let optSelect = optFruit.selectedIndex + '' + optFruit.value;
  console.log(`${optSelect}`);
  //0apple
  return false;
};
