//Código javascript para Desafío

// Defino clase Familia
class Familia{
    constructor(nombre,role,edad,origen){
        this.nombre=nombre;
        this.role=role.toUpperCase();
        this.edad=parseInt(edad);
        this.origen=origen;
    }
}

const miembros = [];

miembros.push(new Familia("Juan","hijo mayor",37,'images/juan.jpg'));
miembros.push(new Familia("Carlos","padre",2021-1957,'images/carlos.jpeg'));
miembros.push(new Familia("Laura","madre",2021-1958,'images/laura.jpg'));
miembros.push(new Familia("Maxi","hijo menor",33,'images/maxi.jpeg'));

ordena_aleatorio();
displayFamilia();

function creaHTML() {
    let padre = document.getElementById("demo2");
    for (const persona of miembros){
        // Primer línea
        let tit = document.createElement("h1");
        tit.textContent = persona.nombre;
        padre.appendChild(tit);
        // Segunda
        let sub = document.createElement("h3");
        sub.textContent = persona.role;
        padre.appendChild(sub);
        // Tercera
        let cuer = document.createElement("p");
        cuer.textContent = persona.edad;
        padre.appendChild(cuer);
        // Cuarta
        var foto = document.createElement("img");
        foto.src = persona.origen;
        foto.style.width = "100px";
        padre.appendChild(foto);
    }
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