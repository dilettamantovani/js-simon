// 1. Math.random 5 numeri
// 2. partenza timer 30 secondi (30*1000) (setTimeout)
// 3. fine timer 30 secondi (30*1000) = sparizione numeri
// 4. comparsa prompt inserimento numeri da parte dell'utente
// 5. risposta software: quanti e quali numeri sono stati individuati

 
let container = document.getElementById('container');
let randomNum = [];


for (let i = 0; i < 5; i++){
    randomNum[i] = getRndInteger(1, 100);
}

container.innerHTML = randomNum

setTimeout(function () {
    container.classList.add('gone');
}, 30000);



// let inputNum;
// let correctNum = checkNum(inputNum, randomNum)
// function userNum () {
//     for (let i = 0; i < 5; i++) {
//         inputNum[i] = prompt('Write one by one the numbers you remember');
//     }
// }

// if (correctNum.length == 0) {
//     alert('You have not entered a correct number')
// }else if (correctNum.length == inputNum.length) {
//     alert(`Congratulations! You guessed them all.`)
// }else{
//     alert(`You guessed ${correctNum.length} numbers`);
// }

// // check num
// function checkNum(inputNum, randomNum) {
//     let correctNum = [];
//     for (let i = 0; i < inputNum.length; i++) {
//         if (inputNum[i] == randomNum[i]) {
//             correctNum.push(i + 1);
//         }
//     }
//     return correctNum;
// }




// // random number generator
function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}