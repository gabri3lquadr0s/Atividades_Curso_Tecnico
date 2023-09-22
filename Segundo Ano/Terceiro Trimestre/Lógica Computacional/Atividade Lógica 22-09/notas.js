function calcNota(notaInicial) {
    var nota = notaInicial
    if(nota < 38){return console.log("Reprovado");}
    for(var i = nota; i < nota*1000; i++){
        var a = i%5;
        if(a === 0){
            console.log(i);
            break;
        }
    }
    var b = i - nota;
    console.log(b);
    if(b > 3){nota = a;}
    console.log(nota)
    if(nota >= 40 && nota < 70){
        return console.log("Em recuperação");
    } else if(nota >= 70) {
        return console.log("Aprovado")
    } else {
        return console.log("Reprovado")
    }
}

calcNota(70)
calcNota(83)