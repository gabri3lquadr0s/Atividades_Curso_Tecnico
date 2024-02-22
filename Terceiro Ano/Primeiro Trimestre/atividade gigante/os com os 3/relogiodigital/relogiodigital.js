var relogio = document.getElementById('relogio1');
function clock() {
    let date = new Date;
    let hour = date.getHours();
    if(hour < 10) hour = `0${hour}`;
    let minute = date.getMinutes();
    if(minute < 10) minute = `0${minute}`;
    let second = date.getSeconds();
    if(second < 10) second = `0${second}`;
    let miliseconds = date.getMilliseconds();
    if(miliseconds < 100) miliseconds = `0${miliseconds}`;
    relogio.innerText = `${hour}:${minute}:${second}:${miliseconds}`
    setTimeout(clock, 10);
} clock();