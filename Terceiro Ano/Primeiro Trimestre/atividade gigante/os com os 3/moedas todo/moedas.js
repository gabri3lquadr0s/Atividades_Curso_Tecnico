function getCurrencies() {
    let select = document.getElementById('toConvert');
    let select2 = document.getElementById('convertTo');
    fetch('https://api.freecurrencyapi.com/v1/currencies?apikey=fca_live_qbYu8As0Ya7HcllW9LV8Xb9aqCOcQrWzfE5haBbl')
        .then(res => res.json())
        .then(data => {
            for(let i in data.data) {
                select.innerHTML += `<option value="${i}">${i} / ${data.data[i].name}</option>`
                select2.innerHTML += `<option value="${i}">${i} / ${data.data[i].name}</option>`
            }
        })
    return;
} getCurrencies();

function getExchangeRates() {
    let value = document.getElementById('convert').value;
    let select = document.getElementById('toConvert').value;
    let select2 = document.getElementById('convertTo').value;
    let h1 = document.getElementById('result');
    fetch(`https://api.freecurrencyapi.com/v1/latest?apikey=fca_live_qbYu8As0Ya7HcllW9LV8Xb9aqCOcQrWzfE5haBbl&base_currency=${select}&currencies=${select2}`)
        .then(res => res.json())
        .then(data => {
            console.log(data)
            h1.innerText = `${value*data.data[select2]}`
        })
    return;
}