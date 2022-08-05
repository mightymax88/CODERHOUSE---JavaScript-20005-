//Código javascript para Desafío

// Declaro constantes globales
let fum;
let fpp;
const fechaH = new Date(); //Es la fecha de hoy
let dasd; //Acá va la FPP
let din; //Acá va la FUM
let checku=0; //Estado de cálculo
let fechad;
let fecham;
let bandCalculo=0;

// Clase para definir al bebe (o bebes, en embarazo múltiple). Rol se usará en futuro, para niños
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
        fechad=parseInt(fecha.slice(0,2));
        fecham=parseInt(fecha.slice(3,5));
        din = new Date(2021, fecham-1, fechad);
        dasd=new Date(2021, fecham-3, fechad+7);
        let res=dasd.getDate()+"/"+dasd.getMonth();
        this.parto=res;
        checku=1; // Bandera
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
        document.getElementById("demo3").textContent=tamanio[Math.floor(semanas)-1].encm;
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

// Datos de tamaño en formato JSON
const tamanio = [
    {id: 1, enp: "semilla", encm: 0.1},
    {id: 2, enp: "semilla", encm: 0.2},
    {id: 3, enp: "semilla", encm: 0.3},
    {id: 4, enp: "semilla", encm: 0.4},
    {id: 5, enp: "arroz", encm: 0.45},
    {id: 6, enp: "lenteja", encm: 0.5},
    {id: 7, enp: "mora", encm: 1},
    {id: 8, enp: "frijol", encm: 1.6},
    {id: 9, enp: "uva", encm: 2.3},
    {id: 10, enp: "aceituna", encm: 3.2},
    {id: 11, enp: "higo", encm: 4.5},
    {id: 12, enp: "limón", encm: 6},
    {id: 13, enp: "naranja", encm: 8},
    {id: 14, enp: "durazno", encm: 10},
    {id: 15, enp: "manzana", encm: 12},
    {id: 16, enp: "palta", encm: 13.5},
    {id: 17, enp: "granada", encm: 15},
    {id: 18, enp: "papaya", encm: 18},
    {id: 19, enp: "pomelo", encm: 20.5},
    {id: 20, enp: "banana", encm: 22.5},
    {id: 21, enp: "zanahoria", encm: 25},
    {id: 22, enp: "pimiento", encm: 26},
    {id: 23, enp: "mango", encm: 27.5},
    {id: 24, enp: "melón", encm: 28.5},
    {id: 25, enp: "pepino", encm: 29},
    {id: 26, enp: "coliflor", encm: 31.5},
    {id: 27, enp: "lechuga", encm: 32.5},
    {id: 28, enp: "berenjena", encm: 33.8},
    {id: 29, enp: "zucchini", encm: 35},
    {id: 30, enp: "zucchini", encm: 37.5},
    {id: 31, enp: "col", encm: 38.8},
    {id: 32, enp: "repollo", encm: 39.2},
    {id: 33, enp: "apio", encm: 42},
    {id: 34, enp: "acelga", encm: 43},
    {id: 35, enp: "puerro", encm: 44},
    {id: 36, enp: "piña", encm: 45},
    {id: 37, enp: "sandía", encm: 46},
    {id: 38, enp: "sandía", encm: 47},
    {id: 39, enp: "sandía", encm: 48},
    {id: 40, enp: "calabaza", encm: 49},
    {id: 41, enp: "calabaza", encm: 50},
    {id: 42, enp: "calabaza", encm: 50},
];
const guardarLocal = (clave, valor) => {localStorage.setItem(clave,valor)};
// Almacenar array completo
guardarLocal("listaTamano",JSON.stringify(tamanio));
// Obtener array
class Tamanios{
    constructor(obj){
        this.week = parseInt(obj.id);
        this.enp = obj.enp.toUpperCase();
        this.encm = parseFloat(obj.encm);
    }
}
// Obtengo listado
const datosT = JSON.parse(localStorage.getItem("listaTamano"));
const tamanoT = [];
for (const objeto of datosT){
    tamanoT.push(new Tamanios(objeto));
}

// Creo arreglo para la Clase Bebe
const bebe=[];
document.getElementById('monitor1').style.visibility='hidden';

// Cargo datos del bebe que fueron guardados en Local Storage
let nombreb = localStorage.getItem('nombreBeBe');
document.getElementById("nombreBB").textContent=nombreb;

// Cargo datos de los Hospitales
const instu = '["Hospital Aleman","Hospital Italiano","Sanatorio Mater Dei"]';
const obji = JSON.parse(instu);
document.getElementById("hosp1").textContent = obji[0];
document.getElementById("hosp2").textContent = obji[1];
document.getElementById("hosp3").textContent = obji[2];

function myCalcular() {
    //Se utilizará mult para registrar embarazos múltiples a futuro, por ahora sin uso
    let mult = "NO";
    let cant;

    if (mult=="SI"){
        cant = prompt("¿Cuántos bebés está esperando (ingrese número)?");
        fum=captura_fum();
        localStorage.setItem('fum',fum);
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
    if (bandCalculo==0){
        $("#monitor1").fadeToggle("slow");
        document.getElementById('monitor1').style.visibility='visible';
        document.getElementById("bCalcular").textContent="Recalcular";
        bandCalculo=1;
    }

    // Actualizo porcentaje
    EmbPorc();

    // Bandera de calculo
    checku = 1;
    localStorage.setItem('estadoC',checku);
}

// Función para obtener el nombre del bebe, guardarlo en LocalStorage y mostrarlo en HTML
function myNombreBB(){
    let name = prompt("Introducir nombre:");
    // Guardo el nombre en Localstorage (el nombre también aparecerá la próxima vez que se muestre abra la ventana)
    localStorage.setItem('nombreBeBe',name);
    // Muestro el nombre
    document.getElementById("nombreBB").textContent=name;
}

// Captura fecha de última menstruación (FUM)
function captura_fum() {
    res=$("#campoFUM").val();
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
    obj.textContent = "Semanas de gestación"
}
function SemOut(obj) {
    obj.textContent = "Semana"
}

function TamOn(obj) {
    let semg = Math.floor(bebe[0].edad/7);
    let frase = "Como un/a "+ tamanoT[semg-1].enp;
    obj.textContent = frase;
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