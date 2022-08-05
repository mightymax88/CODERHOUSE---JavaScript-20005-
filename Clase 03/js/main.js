//Código javascript para Desafío
let palab = prompt("Ingrese palabra (contaremos vocales):");
let result = palab.toUpperCase();
let cont=0;
for (let x of result){
    if ((x=="A")||(x=="E")||(x=="I")||(x=="O")||(x=="U")){
        cont++;
    }
}
let salida = "Se contaron " + cont + " vocales";
alert(salida);