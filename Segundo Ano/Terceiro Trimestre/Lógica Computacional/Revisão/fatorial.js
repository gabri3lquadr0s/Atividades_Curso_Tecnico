function fatorial(num){
    var result = 0
    if(num == 0){
        result = 1
        return(result)
    } else{
        for(var i = num - 1; i >= 1; i--){
            num *= i 
        }
    } return(num)
}
console.log(fatorial(0))
console.log(fatorial(5))
console.log(fatorial(10))