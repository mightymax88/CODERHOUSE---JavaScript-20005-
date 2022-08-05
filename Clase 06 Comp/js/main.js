//Código javascript para Desafío

// Defino clase Familia
class Familia{
    constructor(nombre,rol,edad){
        this.nombre=nombre;
        this.role=nombre.toUpperCase();
        this.edad=parseInt(edad);
    }
}

const miembros = [];

miembros.push(new Familia("Juan","hijo",37));
miembros.push(new Familia("Carlos","padre",2021-1957));
miembros.push(new Familia("Laura","Madre",2021-1958));
miembros.push(new Familia("Maxi","hijo",33));

ordena_aleatorio();
displayFamilia();

function ordena_nombres() {
    miembros.sort(function(a, b){
        let x = a.nombre.toLowerCase();
        let y = b.nombre.toLowerCase();
        if (x < y) {return -1;}
        if (x > y) {return 1;}
        return 0;
    });
    displayFamilia();
}

function ordena_edad() {
    miembros.sort(function(a, b){return a.edad - b.edad});
    displayFamilia();
}

function ordena_aleatorio() {
    miembros.sort(function(a, b){return 0.5 - Math.random()});
    displayFamilia();
}

function displayFamilia() {
    document.getElementById("demo").innerHTML =
    miembros[0].nombre + " " + miembros[0].edad + "<br>" +
    miembros[1].nombre + " " + miembros[1].edad + "<br>" +
    miembros[2].nombre + " " + miembros[2].edad + "<br>" +
    miembros[3].nombre + " " + miembros[3].edad;
}