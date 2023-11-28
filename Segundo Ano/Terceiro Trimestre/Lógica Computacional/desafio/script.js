/*VARIAVEIS GLOBAIS*/ 
var globalSelectedNumber = 0;
var globalValues = [];
var globalDivisibleBy = [];

/*ELEMENTOS GLOBAIS*/
var textNumber = document.getElementById('asd');
var textResult = document.getElementById('dsa');
var sqr1 = document.getElementById('sqr1');
var sqr2 = document.getElementById('sqr2');
var sqr3 = document.getElementById('sqr3');
var sqr4 = document.getElementById('sqr4');
var sqr5 = document.getElementById('sqr5');
var sqr6 = document.getElementById('sqr6');
var sqr7 = document.getElementById('sqr7');
var sqr8 = document.getElementById('sqr8');
var sqr9 = document.getElementById('sqr9');
var sqr10 = document.getElementById('sqr10');

/*FOR PARA POPULAR ARRAY COM TODOS OS ELEMENTOS DE TABUADA*/
for(let i = 1; i <= 10; i++) {
    for(let ii = 1; ii <= 10; ii++) {
        globalValues.push(i*ii);
    }
}

function getRandomValue() {
    textResult.innerText = '';
    globalDivisibleBy = [];
    globalSelectedNumber = Math.floor(Math.random() * globalValues.length);
    textNumber.innerText = globalSelectedNumber
    for(let i = 1; i <= 10; i++) {
        if(globalSelectedNumber %  i === 0) {
            globalDivisibleBy.push(i);
        }
    }
    console.log(globalDivisibleBy)
}

function theGameItself() {
    let selectedNumbers = [];
    if(sqr1.checked) {
        selectedNumbers.push(1);
    } if(sqr2.checked) {
        selectedNumbers.push(2);
    } if(sqr3.checked) {
        selectedNumbers.push(3)
    } if(sqr4.checked) {
        selectedNumbers.push(4);
    } if(sqr5.checked) {
        selectedNumbers.push(5);
    } if(sqr6.checked) {
        selectedNumbers.push(6);
    } if(sqr7.checked) {
        selectedNumbers.push(7);
    } if(sqr8.checked) {
        selectedNumbers.push(8);
    } if(sqr9.checked) {
        selectedNumbers.push(9);
    } if(sqr10.checked) {
        selectedNumbers.push(10)
    }
    console.log(selectedNumbers)
    if(selectedNumbers.toString() == globalDivisibleBy.toString()) {
        textResult.innerText = "Acertou"
    } else {
        textResult.innerText = "Burro"
    }
}
