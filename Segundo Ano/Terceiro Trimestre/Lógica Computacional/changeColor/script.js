function changeColor() {
    var radio = document.querySelector('input[name=radio]:checked');
    if(!radio) alert("Choose one of the options");
    var img = document.getElementById("animal");
    radio = radio.id;
    switch(radio) {
        case "red":
            img.src = "https://media.tenor.com/WYsFmQDiMn8AAAAd/capivara.gif";
            document.body.style.backgroundColor = "red";
            break;
        case "blue":
            img.src = "https://i.pinimg.com/originals/35/67/6f/35676f9499a4b3a32501d74c0aa31332.gif";
            document.body.style.backgroundColor = "aqua";
            break;
        case "green":
            img.src = "https://cdn.shopify.com/s/files/1/0344/6469/files/cat-gif-loop-maru_grande.gif?v=1523984148";
            document.body.style.backgroundColor = "green";
            break;
        case "yellow":
            img.src = "https://i.pinimg.com/originals/22/02/a2/2202a219be0d6fc5944adc33ad682ff9.gif";
            document.body.style.backgroundColor = "yellow";
            break;
    }
}

function headerChange() {
    var text = document.querySelector("h1");
    var letters = "0123456789ABCDEF";
    var color = "#";
    for (var i = 0; i < 6; i++ ) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    text.style.color = color;
} setInterval(headerChange,1000);