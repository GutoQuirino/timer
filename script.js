var ms = 0;
var mili = document.getElementById('milisegundos');
var seg = 0;
var segundos = document.getElementById('segundos');
var min = 0;
var minutos = document.getElementById('minutos');
var hr = 0;
var hora = document.getElementById('hora');
var fun ;


function msec(){
    ms++;
    if(ms==10){
        ms = 0
        seg++;
    }
    if(seg > 59){
        seg = 0;
        min++;
    } 
    if(min > 59){
        min = 0;
        hr++;
    }
    mili.innerHTML = `0${ms}`;
    segundos.innerHTML = seg;
    minutos.innerHTML = min;
    hora.innerHTML = hr;   
}

function start(){
    let intervalo = setInterval(msec,100);
    fun = intervalo;
    document.getElementById('inicio').disabled = true;
}

function pause(){
    clearInterval(fun);
    document.getElementById('inicio').disabled = false;
}

function stop(){
    ms='00'
    seg = '00'
    min = '00'
    hr = '00';
    clearInterval(fun);
    mili.innerHTML = ms;
    segundos.innerHTML = seg;
    minutos.innerHTML = min;
    hora.innerHTML = hr;
    document.getElementById('inicio').disabled = false;
}