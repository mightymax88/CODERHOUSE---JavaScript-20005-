//Código javascript para Desafío

// Declaro constantes globales
let fum;
let fpp;

// Clase para definir al bebe (o bebes, en embarazo múltiple)
class Bebe{
    constructor(nombre,edad,edadu,familia,rol){
        this.nombre=nombre;
        this.edad=edad;
        this.edadu=edadu;
        this.familia=familia;
        this.rol="Feto";
        this.parto="";
    }
    // En base a este dato, calcula la fecha probable de parto (FPP), mediante la regla de Naegele
    // El cálculo consiste en sumarle 7 a los días de la FUM y restarle tres a los meses
    calcula_fpp(fecha){
        let fechad=parseInt(fecha.slice(0,2));
        let fecham=parseInt(fecha.slice(3,5));
        const d=new Date(2021, fecham-3, fechad+7);
        let res=d.getDate()+"/"+d.getMonth();
        this.parto=res;
    }
    // Muestra la FPP
    muestra_fpp(){
        alert("La fecha probable de parto es: "+this.parto);
    }
}

// Clase para definir al grupo familiar, que va a hacer seguimiento del embarazo
class Persona{
    constructor(nombre,edad,edadu,familia,rol){
        this.nombre=nombre;
        this.edad=edad;
        this.edadu=edadu;
        this.familia=familia;
        this.rol=rol;
    }
}

// Creo arreglo para la Clase Bebe
const bebe=[];

let mult = prompt("¿Es un embarazo múltiple (SI/NO)?");
mult = mult.toUpperCase();
let cant;

if (mult=="SI"){
    cant = prompt("¿Cuántos bebés está esperando (ingrese número)?");
    fum=captura_fum();
    for (let i=0;i<cant;i++){
        let num="Beb@ #"+(i+1);
        bebe.push(new Bebe(num,0,"días","Apellido"));
        bebe[i].calcula_fpp(fum);
    }
    bebe[0].muestra_fpp();
    document.getElementById("demo").innerHTML=bebe[0].parto;
}
else{
    fum=captura_fum();
    bebe.push(new Bebe("Beb@",0,"días","Apellido"));
    bebe[0].calcula_fpp(fum);
    bebe[0].muestra_fpp();
    document.getElementById("demo").innerHTML=bebe[0].parto;
}

// Captura fecha de última menstruación (FUM)
function captura_fum() {
    let long=0;
    while (long!=5){
        res = prompt("Ingrese fecha de última menstruación (respetando formato DD/MM):");
        long=res.length;
    }
    return res;
}