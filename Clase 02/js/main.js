//Código javascript para Desafío
let mayor = prompt("Es mayor de edad? (si/no)");
let anio = prompt("Ingrese su año de nacimiento");

let edad = 2021 - anio;

if (((mayor=="si") || (mayor=="SI") || (mayor=="Si")) && (edad>=18)){
    let salida = "Bienvenido, se le garantiza acceso por ser mayor de edad"; 
    alert(salida);
}
else if (((mayor=="no") || (mayor=="NO") || (mayor=="No")) && (edad<18)){
    let salida = "Lo lamentamos, no puede ingresar al sitio por ser menor de edad";
    alert(salida);
}
else {
    let salida = "Por favor responda nuevamente";
    alert(salida);
}