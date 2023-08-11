function somaMeio(num1, num2){
    var result = 0
    for(var i = num2; i > num1; i--){
        if(i % 2 == 0){
            result += i
        }
    } return(result)
}
console.log(somaMeio(1,10))
console.log(somaMeio(2,5))
console.log(somaMeio(20,37))
console.log(somaMeio(10,11))