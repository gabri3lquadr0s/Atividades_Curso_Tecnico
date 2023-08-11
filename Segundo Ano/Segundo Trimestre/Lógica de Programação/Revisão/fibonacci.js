 function fibonacci(num){
    var sequence = [1]
    for(var i = 0; i < num; i++){
        var a = sequence[i]
        var b = a+i
        sequence.push(b)
    }
    return(sequence)
}
console.log(fibonacci(10))
