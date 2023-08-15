function paresArray(a=[]){
    var b = []
    a.forEach(element => {
       if(element % 2 == 0){
            b.push(element)
       } 
    });
    return(b)
}
console.log(paresArray(a=[87, 45, 66, 84, 98, 100, 3]))