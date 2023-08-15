var vogais = ['a','e','i','o','u']
function vogalPalavra(word){
    var word = word.split('')
    var qvogais = 0
    word.forEach(element => {
       var index = vogais.indexOf(element)
       if(index != -1){
        qvogais++
       }
    }) 
    return(qvogais)
}
console.log(vogalPalavra('maça'))
console.log(vogalPalavra('paralelepipedo'))
console.log(vogalPalavra('ornitorrinco'))