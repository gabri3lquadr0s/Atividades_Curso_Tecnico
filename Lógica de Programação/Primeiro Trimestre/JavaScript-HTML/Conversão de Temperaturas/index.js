function converte(){
    //var temperatura é pega do input com id tempValor
    var temperatura = Number(document.getElementById("tempValor").value)
    var temperaturaConvertida
    //Aqui, o código checa se o botão radius de um id específico está marcado
    if(document.getElementById("fc").checked){
        //A var temperaturaConvertida é definida pela conta de converção associada com cada tipo de medição
        temperaturaConvertida = (temperatura - 32)*5/9
        //No elemento HTML com o id resultado, o valor de temperaturaConvertida é mostrado, arredondado para
        //dois dígitos com tofixed(2) e também com o respectivo símbolo de medição
        document.getElementById("resultado").innerHTML = (`${temperaturaConvertida.toFixed(2)} C°`)
    }
    //Se a afirmação não foi verdadeira, ele passa para a próxima checagem
    else if(document.getElementById("cf").checked){
        temperaturaConvertida = temperatura*9/5+32
        document.getElementById("resultado").innerHTML = (`${temperaturaConvertida.toFixed(2)} F°`)
    }
    else if(document.getElementById("kc").checked){
        temperaturaConvertida = temperatura - 273.15
        document.getElementById("resultado").innerHTML = (`${temperaturaConvertida.toFixed(2)} C°`)
    }
    else if(document.getElementById("ck").checked){
        temperaturaConvertida = temperatura + 273.15
        document.getElementById("resultado").innerHTML = (`${temperaturaConvertida.toFixed(2)} K°`)
    }
    else if(document.getElementById("fk").checked){
        temperaturaConvertida = (temperatura + 459.67)*5/9
        document.getElementById("resultado").innerHTML = (`${temperaturaConvertida.toFixed(2)} K°`)
    }
    else if(document.getElementById("kf").checked){
        temperaturaConvertida = 1.8*(temperatura-273)+32
        document.getElementById("resultado").innerHTML = (`${temperaturaConvertida.toFixed(2)} F°`)
    }
}