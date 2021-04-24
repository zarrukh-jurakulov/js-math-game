
let firstAdd = Math.floor((Math.random() * 10));
document.getElementById('firstNum').innerHTML = firstAdd

let secondAdd = Math.floor((Math.random() * 10));
document.getElementById('secondNum').innerHTML = secondAdd;

let sumOfNumbers = firstAdd + secondAdd;

function checkingButton() {
 let userAnswer = document.getElementById('answer').value

 if (parseFloat(userAnswer) === sumOfNumbers) {
  alert("correct")
  location.reload();
 } else {
  alert('Incorrect',)

 }

}



