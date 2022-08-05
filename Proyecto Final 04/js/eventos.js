// Eventos para DOM
$(document).ready(function(){
    // Cálculo de FPP
    document.getElementById("bCalcular").addEventListener("click", calcularFPP);
    // Interacción cajas de monitoreo
    document.getElementById("cajaFPP").addEventListener("mouseover", FPPOn);
    document.getElementById("cajaFPP").addEventListener("mouseout", FPPOut);
    document.getElementById("cajaSem").addEventListener("mouseover", SemOn);
    document.getElementById("cajaSem").addEventListener("mouseout", SemOut);
    document.getElementById("cajaTam").addEventListener("mouseover", TamOn);
    document.getElementById("cajaTam").addEventListener("mouseout", TamOut);
    document.getElementById("cajaD").addEventListener("mouseover", DiasOn);
    document.getElementById("cajaD").addEventListener("mouseout", DiasOut);
    // Editar nombre del bebe
    document.getElementById("cambioNombreBB").addEventListener("click", calculaNombreBB);
    // Cambio de género/sexo del bebé
    document.getElementById("myGenero").addEventListener("change", elijoGenero);
    // Cambio de próxima fecha
    document.getElementById("proxFecha").addEventListener("change", cambiofecha);
    // Cambio institución
    document.getElementById("myHops").addEventListener("change", cambioHospital);
});