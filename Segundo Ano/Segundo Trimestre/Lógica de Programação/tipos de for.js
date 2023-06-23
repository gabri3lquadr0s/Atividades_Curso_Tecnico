//for in -> para objetos

var obj = {
    a:1,
    b:2,
    c:3
}
for(let prop in obj){
    console.log("obj",prop,"=",obj[prop])
}

//for of -> para arrays

var iteravel = [{nome:"marcos", "prof":true},
    {nome:"carlos",prof:false},
    {nome:"rafael",prof:true}]
for(const valor of iteravel){
    console.log(valor.nome)
}

//um bagulho ae
var teste = "teste"
for(const valor2 of teste){
    console.log(valor2)
}