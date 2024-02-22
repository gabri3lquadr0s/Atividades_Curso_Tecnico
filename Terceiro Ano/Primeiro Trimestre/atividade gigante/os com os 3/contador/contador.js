var forms = document.getElementById('forms');
var h1 = document.getElementById('result')
forms.addEventListener('submit', function(e){
    e.preventDefault()
    let area = document.getElementById('area').value;
    let area2 = area.split(" ");
    let area3 = area.split("")
    console.log(area2, area3)
    h1.innerHTML = `O número de palavras é ${area2.length} e o número de caracteres é ${area3.length} (contantdo espaços)`;
}) 