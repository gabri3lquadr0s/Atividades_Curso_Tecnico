function jurosCalc(capitalInicial, taxa, timeYear) {
    let juros = capitalInicial*taxa*timeYear;
    return juros;
}
console.log(jurosCalc(1000, 0.05, 10));

function jurosCompostos(capitalInicial, taxa, timeYear) {
    let juros = capitalInicial*Math.pow(1+taxa, timeYear);
    return juros;
}
console.log(jurosCompostos(1000, 0.05, 10));