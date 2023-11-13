// 1. Math.random 5 numeri
// 2. partenza timer 30 secondi (30*1000) (setTimeout)
// 3. fine timer 30 secondi (30*1000) = sparizione numeri
// 4. comparsa prompt inserimento numeri da parte dell'utente
// 5. risposta software: quanti e quali numeri sono stati individuati


//numeri casuali
const randomNum = getRandomNum(5, 1, 100);


//chiamo array
document.getElementById('container').innerHTML = randomNum.join(", ");

//scomparsa numeri
setTimeout(function () {
    container.classList.add('gone');
}, 30000);


//richiesta numeri
setTimeout(function () {
    let inputNum = getUserNum();
    let correctNum = getCorrectNum(randomNum, inputNum)
    alert(`You guessed ${correctNum.length} numbers`);
    alert("The numbers you guessed are: " + correctNum.join(", ") + "." );
 }, 32000);

//input utente = prompt + array push * 5
function getUserNum() {

    let result = [];
    
    while (result.length < 5) {
        let newNum = parseInt(prompt('Enter a number: '));
        
        if(!result.includes(newNum)) {
            result.push(newNum);

        } else {
            alert('You have already entered this number');
        }

    }

    return result;

}

//controllo + restituzione
function getCorrectNum(randomNum, inputNum) {

    let result = [];

    //controllo corrispondenza numero per numero
    for (let i = 0; i < randomNum.length; i++) {
        if (inputNum.includes(randomNum[i])) {
            result.push(randomNum[i]);
        }
    }

    return result;

}


// // random number generator
function getRandomNum(num, min, max) {
    let result = [];

    while (result.length < num) {
        const newNumber = getRndInteger(min, max);

        if (!result.includes(newNumber)) {
            result.push(newNumber);
        }
    }

    return result;
}

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}