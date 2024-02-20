function porraDeContaBasica(x,y) {
    return console.log(x+y,x-y,x*y,x/y);
}

function mediaBasicaPorra(x,y,z) {
    return console.log((x+y+z)/3);
}

function parImpar(x) {
    return x%2 == 0 ? console.log('par') : console.log('impar');
}

function positivoOuN(x) {
    if(x == 0) return console.log(0);
    return x > 0 ? console.log('positivo') : console.log('negativo');
}

function fatorial(x) {
    let fat = x;
    for(let i = x-1; i > 0; i--) {
        console.log(i, fat);
        fat = fat*i;
    } return console.log(fat)
}fatorial(5)

function primo(x) {
    let divisores = 0;
    for(let i = 0; i <= x; i++) {
        if(x % i == 0) divisores++;
    } return divisores == 2 ? console.log('primo') : console.log('no primo');
} primo(10);

function numero3(x,y,z) {
    let sda = x;
    if(y > sda) sda = y;
    if(z > sda) sda = z;
    return sda; 
}
console.log(numero3(1,5,3))

function digitos(stringN) {
    let soma = 0;
    for (let index = 0; index < stringN.length; index++) {
        let sad = Number(stringN[index]);
        if(isNaN(sad)) {
            return console.log('coloca numero direito seu porra');
        }
        soma = soma + sad;
    }
    return soma;
}
console.log(digitos('1234'))

function inverter(x) {
    let y = x.split("").reverse().join()
    return console.log(x*-1, y);
}

function potencia(a, b) {
    return a**b;
}
console.log(potencia(2,5))

function anoBi(ano) {
    if(ano % 4 == 0 || ano % 100 == 0 && ano % 400 == 0) {
        return(console.log(`${ano} é bissexto`));
    } else{
        return(console.log(`${ano} não é bissexto`));
    }
}

function numToBy(num) {
    return(num >>> 0).toString(2);
}
console.log(numToBy(2))

function mdc(num1, num2, num3) {
    let sda = num1, max = 0;
    if(num2 < sda) sda = num2;
    if(num3 < sda) sda = num3;
    for(let i = 2; i <= sda; i++) {
        if(primo(i))
        if(num1 % i == 0 && num2 % i == 0 && num3 % i == 0) {
            max = i;
        }
    }return(console.log(`O mdc de ${num1} ${num2} e ${num3} é ${max}`));
} mdc(81,9,27)

//elado
function mmc(x,y) {
    let num1 = x, num2 = y
    var resto;
    do {
        resto = num1 % num2;
        num1 = num2;
        num2 = resto;
    } while (resto != 0);
    return num1;
}

function palindromo(palavra) {
    if(palavra.split().reverse().join() === palavra) return console.log(`${palavra} é um palindromo`);
}

function biggerSmaller(arr) {
    return console.log(`${Math.max(...arr)}, ${Math.min(...arr)}}`)
} biggerSmaller([1,2,3,4,5,6,7,8])

function ordenar(arr) {
    arr.sort((a, b) => {
        if(a > b) return 1;
        if(a < b) return -1;
        return 0;
    })
}console.log(ordenar([3,2,1]))

function raiz(num) {
    return Math.sqrt(num);
} console.log(raiz(2))

function vogal(palavra) {
    a = palavra.replace(/[aeiouà-ú]/gi,'');
    return palavra.length - a.length;
} console.log(vogal('abcdefg'))

function numPalavras(frase) {
    let a = frase.split(" ")
    return a.length;
} console.log(numPalavras('chicken little'))

function inteiroModulo(num1, num2) {
    if(String(num1).split(".").length == 2 || String(num2).split(".").length == 2) {
        return console.log("Apenas números inteiros");
    }
    return console.log(num1%num2);
} inteiroModulo(8,4)

function digitosNumericos(string) {
    //regex para numeros
    let sa = /^\d+$/.test(string);
    console.log(sa);
}digitosNumericos('1234');

function anagrama(str1, str2) {
    if(str1.length != str2.length) return console.log('no anagrama');
    let a = str1.split("");
    let b = str2.split("");
    let count = 0;
    for(let i = 0; i < a.length; i++) {
        for(let ii = 0; ii < b.length; ii++) {
            if(a[i] == b[ii]) {
                count++;
            }
        }
    } if(count == str1.length) {
        return console.log('yes anagrama');
    } else {
        return console.log('no anagrama');
    }
}anagrama('abcdefg', 'gfedcba')

function triangulo(b,h) {
    return console.log((b*h)/2);
}triangulo(50,20)

function circulo(r) {
    return console.log((r**2)*(22/7));
} circulo(20)

function perimetro(h,b) {
    return console.log((b*2)+(h*2));
}perimetro(12,4)