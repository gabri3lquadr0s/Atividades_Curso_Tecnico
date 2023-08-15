function fibonacci(num){
    var sequence = []
    var a = 0, b = 1, n = a + b
    sequence.push(a, b, b)
    for(i = 3; i < num; i++){
        a = b
        b = n
        n = a + b
        sequence.push(n)
    } return(sequence)
} console.log(fibonacci(20))