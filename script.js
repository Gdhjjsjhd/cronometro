var segundos = 0
var minutos = 0
var horas =  0

var intervalo;

function doisDigitos(digito){
    if ( digito < 10) {
        return('0' + digito)
    } else {
        return(digito)
    }
}

function contador() {
    segundos
    if (segundos == 60){
        minutos++
        segundos = 0



        if(minutos == 60){
            minutos = 0
            horas++
        }
    }
    document.getElementById('contador').innerHTML = doisDigitos(horas) + ':' + doisDigitos(minutos) + ':' + doisDigitos(segundos);
}

function start(){
    contador();
    intervalo = setInterval(contador, 10)
}

 function pause(){
    clearInterval(intervalo)
}

function stop(){
    clearInterval(            )

    segundos =   0
    minutos = 0
    horas = 0

    window.alert('Voce parou em: ' + document.getElementById('contador').innerText)

    document.getElementById('contador').innerText = '00:00:00'
}