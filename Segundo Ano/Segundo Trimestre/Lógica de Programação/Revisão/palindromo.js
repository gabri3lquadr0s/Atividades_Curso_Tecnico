function palindromo(word){
    var worda = word.split("").reverse().join("")
    console.log(word, worda)
    if(word == worda){
        return(true)
    } else{
        return(false)
    }
}
console.log(palindromo('abc'))
console.log(palindromo('ovo'))
console.log(palindromo('OvO'))