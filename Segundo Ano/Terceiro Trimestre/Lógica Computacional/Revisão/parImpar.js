function parImpar(num){
    var resultado;
    if(num % 2 == 0){
        resultado = `${num} é par`;
    } else{
        resultado =  `${num} é impar`;
    }
    return(resultado);
}
console.log(parImpar(2))
console.log(parImpar(3))
console.log(parImpar(4))
console.log(parImpar(5))