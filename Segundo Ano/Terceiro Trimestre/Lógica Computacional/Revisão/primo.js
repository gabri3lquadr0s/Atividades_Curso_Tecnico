//segundo número fala até onde calcula
function primo(num){
    var i = 0
    for(var ii = 0; ii <= num; ii++){
        if(num % ii == 0){
            i++
        }
    }
    return i == 2 ? console.log( `${num} é primo`) : console.log(`${num} não é primo`)
}

primo(2)
primo(3)
primo(4)
primo(5)
primo(11231414)