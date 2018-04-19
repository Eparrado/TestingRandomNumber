
function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min +1)) + min;
};

var randomNumber = getRandomIntInclusive(1,100);

console.log(randomNumber);

var inputNumber = document.querySelector(".input-number");
var submitButton = document.querySelector(".submit-button");


function saveInputNumber(event){
    event.preventDefault();
    var userNumber = parseInt(inputNumber.value);
    console.log(userNumber);
}


submitButton.addEventListener('click', saveInputNumber);