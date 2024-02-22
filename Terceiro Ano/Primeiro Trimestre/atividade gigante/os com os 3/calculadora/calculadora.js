var display = document.getElementById('display');
   
function addToDisplay(value) {
    display.value += value;
}

function clear() {
    display.value = "";
}

function result() {
    try {
    var result = eval(display.value);
    display.value = result;
    } 
    catch (error) {
       alert('Erro ao calcular: ' + error.message);
     }
   }