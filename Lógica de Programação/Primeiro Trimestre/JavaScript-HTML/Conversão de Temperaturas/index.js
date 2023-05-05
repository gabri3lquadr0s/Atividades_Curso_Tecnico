function converte(){
    var temperatura = Number(document.getElementById("tempValor").value)
    var temperaturaConvertida
    if(document.getElementById("fc").checked){
        temperaturaConvertida = (temperatura - 32)*5/9
        document.getElementById("resultado").innerHTML = (`${temperaturaConvertida.toFixed(2)} C°`)
    }
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