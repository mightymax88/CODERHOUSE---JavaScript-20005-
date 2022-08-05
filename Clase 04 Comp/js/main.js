//Código javascript para Desafío

// Declaro constantes globales
let fum;
let fpp;

fum=captura_fum();
fpp=calcula_fpp(fum);
muestra_fpp();

// Captura fecha de última menstruación (FUM)
function captura_fum() {
    let long=0;
    let text="";
    while (long<5){
        res = prompt("Ingrese fecha de última menstruación (respetando formato DD/MM):");
        long=res.length;
    }
    return res;
}
// En base a este dato, calcula la fecha probable de parto (FPP), mediante la regla de Naegele
// El cálculo consiste en sumarle 7 a los días de la FUM y restarle tres a los meses
function calcula_fpp(fecha){
    let fechad=parseInt(fecha.slice(0,2));
    let fecham=parseInt(fecha.slice(3,5));
    const d=new Date(2021, fecham-3, fechad+7);
    let res=d.getDate()+"/"+d.getMonth();
    return res;
}
// Muestra la FPP
function muestra_fpp(){
        alert("La fecha probable de parto es: "+fpp);
}