const horas = document.getElementById("hora");
const minutos = document.getElementById("minutos");
const segundos = document.getElementById("segundos");



const relogio = setInterval(function time(){
    let dataHoje = new Date();
    let hr = dataHoje.getHours();
    let min = dataHoje.getMinutes();
    let seg = dataHoje.getSeconds();

    if (hr < 10) hr = '0' + hr; 
    if (min < 10) min = '0' + min; 
    if (seg < 10) seg = '0' + seg; 

    horas.textContent = hr;
    minutos.textContent = min;
    segundos.textContent = seg;

    document.title = hr+":"+min+":"+seg+" - Relogio BumbleGreen ";
});