var values = [3,4,5,6,7]
function qualTabuada() {
    /*CHECAR EM QUAIS TABUÁDAS O NÚMERO ESTÁ*/
    let result;
    let numSoz = Number(document.getElementById('numSoz').value);
    if(numSoz == 0) {
        result = parseInt(document.getElementById('mult1').value) * parseInt(document.getElementById('mult2').value);
        console.log(result);
    } else {
        result = numSoz;
    }
    let truevalues = [];
    for(let i = 0; i < values.length; i++) {
        if(result % values[i] === 0) truevalues.push(values[i]);
    } console.log(truevalues);
    cores(truevalues);
}

function cores(truevalues) {
    const corBase = '#555';

    /*INPUTS DE COR*/
    let c3 = document.getElementById('c3').value;
    let c4 = document.getElementById('c4').value;
    let c5 = document.getElementById('c5').value;
    let c6 = document.getElementById('c6').value;
    let c7 = document.getElementById('c7').value;

    /*OS QUADRADOS ONDE APARECE A COR*/
    let sqr3 = document.getElementById('sqr3');
    let sqr4 = document.getElementById('sqr4');
    let sqr5 = document.getElementById('sqr5');
    let sqr6 = document.getElementById('sqr6');
    let sqr7 = document.getElementById('sqr7');

    sqr3.style.backgroundColor = corBase;
    sqr4.style.backgroundColor = corBase;
    sqr5.style.backgroundColor = corBase;
    sqr6.style.backgroundColor = corBase;
    sqr7.style.backgroundColor = corBase;

    /*FUNÇÃO*/
    for(let i = 0; i < truevalues.length; i++) {
        if(truevalues[i] === 3) {
            sqr3.style.backgroundColor = c3;
        } else if(truevalues[i] === 4) {
            sqr4.style.backgroundColor = c4;
        } else if(truevalues[i] === 5) {
            sqr5.style.backgroundColor = c5;
        } else if(truevalues[i] === 6) {
            sqr6.style.backgroundColor = c6;
        } else if(truevalues[i] === 7) {
            sqr7.style.backgroundColor = c7;
        }
    }
}
