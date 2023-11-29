/*VARIAVEIS GLOBAIS*/ 
var globalSelectedNumber;
var globalValues = [];
var globalDivisibleBy = [];

/*ELEMENTOS GLOBAIS*/
var textNumber = document.getElementById('asd');
var textResult = document.getElementById('dsa');
var yay = new Audio('./media/yay.mp3');
var bonk = new Audio('./media/bonk.mp3');

/*FOR PARA POPULAR ARRAY COM TODOS OS ELEMENTOS DE TABUADA*/
for(let i = 1; i <= 10; i++) {
    for(let ii = 1; ii <= 10; ii++) {
        globalValues.push(i*ii);
    }
}

/*FUNÇÃO PARA PEGAR O NÚMERO ALEATÓRIO E CALCULAR SEUS DIVISORES*/
function getRandomValue() {
    textResult.innerText = '';
    globalDivisibleBy = [];
    let randomIndex = Math.floor(Math.random() * globalValues.length);
    globalSelectedNumber = globalValues[randomIndex];
    textNumber.innerText = globalSelectedNumber
    for(let i = 1; i <= 10; i++) {
        if(globalSelectedNumber %  i === 0 && globalSelectedNumber / i <=10) {
            globalDivisibleBy.push(i);
        }
    } console.log(globalDivisibleBy)
}

/*CHECAGEM DO JOGO*/
function theGameItself() {
    if(globalSelectedNumber == null) {
        return alert('Gere um número');
    }
    let selectedNumbers = [];
    for(let i = 1; i <= 10; i++) {
        if(document.getElementById(`sqr${i}`).checked) {
            selectedNumbers.push(i);
        }
    }
    if(selectedNumbers.length == 0) return alert('Você não escolheu nenhuma resposta');
    if(selectedNumbers.toString() == globalDivisibleBy.toString()) {
        yay.play();
        return textResult.innerText = 'Parabéns, você acertou!';
    } else {
        bonk.play();
        return textResult.innerText = 'Infelizmente você errou, tente novamente ou gere um novo número';
    }
}
