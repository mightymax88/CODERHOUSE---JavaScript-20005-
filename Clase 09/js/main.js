//Código javascript para Desafío

// Declaro constantes globales
let fum;
let fpp;
const fechaH = new Date(); //Es la fecha de hoy
let dasd; //Acá va la FPP
let din; //Acá va la FUM


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
        din = new Date(2021, fecham-1, fechad);
        dasd=new Date(2021, fecham-3, fechad+7);
        let res=dasd.getDate()+"/"+dasd.getMonth();
        this.parto=res;
    }
    // Muestra la FPP
    muestra_fpp(){
        alert("La fecha probable de parto es: "+this.parto);
    }
    // Calcula las semanas de gestacion
    calcula_semana(){
        var difference = fechaH.getTime() - din.getTime();
        var days = Math.ceil(difference / (1000 * 3600 * 24));
        this.edad = days;
        let semanas=days/7;
        document.getElementById("demo2").textContent=Math.floor(semanas);
        let diasR=280-this.edad;
        document.getElementById("demo4").textContent=diasR;
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
document.getElementById('monitor1').style.visibility='hidden';

function myCalcular() {
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
        document.getElementById("demo").textContent=bebe[0].parto;
    }
    else{
        fum=captura_fum();
        bebe.push(new Bebe("Beb@",0,"días","Apellido"));
        bebe[0].calcula_fpp(fum);
        bebe[0].muestra_fpp();
        document.getElementById("demo").textContent=bebe[0].parto;
    }

    bebe[0].calcula_semana();

    //Muestro el panel
    document.getElementById('monitor1').style.visibility='visible';
    document.getElementById("bCalcular").textContent="Recalcular";

    // Actualizo porcentaje
    EmbPorc();
}

function myNombreBB(){
    let name = prompt("Introducir nombre:");
    document.getElementById("nombreBB").textContent=name;
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

//Felicita en función del género seleccionado
function elijoGenero() {
    prefer = document.forms[0].myGenero.value;
    if (prefer!="---"){
        alert("Felicitaciones por tu " + prefer + "!");
    }
}

// Agrego Event en bloques
function FPPOn(obj) {
    obj.textContent = "Fecha Probable de Parto"
}
function FPPOut(obj) {
    obj.textContent = "FPP"
}

function SemOn(obj) {
    obj.textContent = "Semana de gestación"
}
function SemOut(obj) {
    obj.textContent = "Semana"
}

function TamOn(obj) {
    obj.textContent = "Estimado en centímetros"
}
function TamOut(obj) {
    obj.textContent = "Tamaño [cm]"
}

function DiasOn(obj) {
    obj.textContent = "... hasta 40 semanas"
}
function DiasOut(obj) {
    obj.textContent = "Días restantes"
}

// Calcular porcentaje en función a semanas
function EmbPorc() {
    let semg = document.getElementById("demo2");
    let porc = Math.floor(parseInt(semg.textContent)/40*100);
    let porct = porc + "%";
    // element.attribute = new value
    // element.style.property = new style
    document.getElementById("barraEmb").textContent = porc + "%";
    document.getElementById("barraE").style.width = porct;
}