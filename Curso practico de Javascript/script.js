console.log("Hello, world")
const btn1 = document.querySelector('#btn1')
const btn2 = document.querySelector('#btn2')
const btn = document.querySelector('#button')
const p = document.querySelector('#showResult')
btn.addEventListener('click',sum)
function sum() {
  const sumaIn = parseInt(btn1.value) + parseInt(btn2.value);
  p.innerText = "El resultado es: " + sumaIn
}