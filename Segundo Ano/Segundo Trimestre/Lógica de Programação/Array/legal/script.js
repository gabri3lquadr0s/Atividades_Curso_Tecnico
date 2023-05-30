var arrayAlunos = []

function addAluno(){
    var aluno = String(document.getElementById(`arrayInput`).value)
    arrayAlunos.push(aluno)
    document.getElementById("array").innerHTML = arrayAlunos
}

function removeAluno(){
    var aluno = String(document.getElementById(`arrayInput`).value)
    var pos = arrayAlunos.indexOf(aluno)
    console.log(pos)
    if(pos == -1){
        return document.getElementById("error").innerHTML = (`O aluno ${aluno} não foi encontrado`)
    }
    arrayAlunos.splice(pos,1)
    console.log(arrayAlunos)
    document.getElementById("array").innerHTML = arrayAlunos
}

function editAluno(){
    var aluno = String(document.getElementById(`arrayInput`).value)
    var pos = arrayAlunos.indexOf(aluno)
    var edicao = prompt(`Escreva o que deve substituir ${aluno}`)
    if(edicao == null){
        return
    }
    arrayAlunos[pos] = edicao
    document.getElementById("array").innerHTML = arrayAlunos
}