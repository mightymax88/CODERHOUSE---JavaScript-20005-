//Código javascript para Desafío

// Declaro constantes globales
let fum; //Fecha de última menstruación
let fpp; //Fecha probable de parto en base a la FUM
const fechaH = new Date(); //Es la fecha de hoy
let dasd;
let din;
let checku=0; //Estado de cálculo
let fechad; //Día de la fecha
let fecham; //Mes de la fecha
let bandCalculo=0;
let bandSigo=0;
var banderaUsuarios=0; //Arranca visible (bandera de contactos)

// Clase para definir al bebe (o bebes, en embarazo múltiple)
class Bebe{
    constructor(nombre,edad,edadu,familia){
        this.nombre=nombre;
        this.edad=edad;
        this.edadu=edadu;
        this.familia=familia;
        this.parto="";
    }
    // En base a este dato, calcula la fecha probable de parto (FPP), mediante la regla de Naegele
    // El cálculo consiste en sumarle 7 a los días de la FUM y restarle tres a los meses
    calcula_fpp(fecha){
        if(bandSigo==1){
            fechad=parseInt(fecha.slice(0,2));
            fecham=parseInt(fecha.slice(3,5));
            if(fecham>1){
                din = new Date(2021, fecham-1, fechad);
                dasd=new Date(2021, fecham-3, fechad+7);
            }
            else{
                din = new Date(2022, fecham-1, fechad);
                dasd=new Date(2022, fecham-3, fechad+7);
            }
            let res=dasd.getDate()+"/"+dasd.getMonth();
            this.parto=res;
            localStorage.setItem('fpp',res);
            checku=1; // Bandera
        }
    }
    // Calcula las semanas de gestacion
    calcula_semana(){
        if(bandSigo==1){
            var diferencia = fechaH.getTime() - din.getTime();
            var dias = Math.ceil(diferencia / (1000 * 3600 * 24));
            this.edad = dias;
            edadEnDias = dias;
            localStorage.setItem('edadDias',Math.floor(dias));
            let semanas=dias/7;
            let diasR=280-this.edad;
            if(diasR>=0){
                if(semanas>0){
                    document.getElementById("demo2").textContent=Math.floor(semanas);
                    localStorage.setItem('semanas',Math.floor(semanas));
                }
                else{
                    document.getElementById("demo2").textContent=0;
                    localStorage.setItem('semanas',0);
                }
                document.getElementById("demo4").textContent=diasR;
                localStorage.setItem('diasRestantes',diasR);
                if(semanas>1){
                    document.getElementById("demo3").textContent=datosTamano[Math.floor(semanas)-1].encm;
                    localStorage.setItem('tamanoG',datosTamano[Math.floor(semanas)-1].encm);
                }
                else{
                    document.getElementById("demo3").textContent=datosTamano[Math.floor(1)].encm;
                    localStorage.setItem('tamanoG',datosTamano[Math.floor(1)].encm);
                }
            }
            else{
                document.getElementById("demo2").textContent=Math.floor(semanas);
                localStorage.setItem('semanas',Math.floor(semanas));
                document.getElementById("demo4").textContent=diasR;
                localStorage.setItem('diasRestantes',diasR);
                document.getElementById("demo3").textContent=datosTamano[Math.floor(42)-1].encm;
                localStorage.setItem('tamanoG',datosTamano[Math.floor(42)-1].encm);
                alert("Revise la fecha o el parto será en breve, considerando una gestación de 40 semanas")
            }
        }
    }
}

// Creo arreglo para la Clase Bebe
const bebe=[];

// Cargo datos que fueron guardados en Local Storage
let nombreb = localStorage.getItem('nombreBeBe');
document.getElementById("nombreBB").textContent=nombreb;
let fpp_guardada = localStorage.getItem('fpp');
document.getElementById("demo").textContent=fpp_guardada;
let fum_guardada = localStorage.getItem('fum');
document.getElementById("campoFUM").value=fum_guardada;
let semanas_guardada = localStorage.getItem('semanas');
document.getElementById("demo2").textContent=semanas_guardada;
let tamano_guardado = localStorage.getItem('tamanoG');
document.getElementById("demo3").textContent=tamano_guardado;
let diasRestantes_guardada = localStorage.getItem('diasRestantes');
document.getElementById("demo4").textContent=diasRestantes_guardada;
document.getElementById("sexoBB").className=localStorage.getItem('sexo');
document.getElementById("myGenero").value=localStorage.getItem('sexoN');
document.getElementById("barraEmb").textContent = localStorage.getItem('porcNumero') + "%";
document.getElementById("barraE").style.width = localStorage.getItem('porcTotal');
document.getElementById("proxFecha").value = localStorage.getItem('proximaFecha');
document.getElementById("signoM").textContent = localStorage.getItem('signoZod');
let edadEnDias=localStorage.getItem('edadDias');