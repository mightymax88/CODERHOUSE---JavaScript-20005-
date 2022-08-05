// jQuery addition
$(document).ready(function(){

    // Ocultar algunos campos al inicio
    $("#info1").hide();
    $("#info2").hide();
    $("#info3").hide();
    $("#info4").hide();

    // jQuery toogle example
    $("#cajaFPP").click(function(){
        $("#info1").fadeToggle("slow");
    });
    $("#cajaSem").click(function(){
        $("#info2").fadeToggle("slow");
    });
    $("#cajaTam").click(function(){
        $("#info3").fadeToggle("slow");
    });
    $("#cajaD").click(function(){
        $("#info4").fadeToggle("slow");
    });
    $("#botonBarra").click(function(){
        $("#mySidebar").fadeToggle("fast");
    });

    // Efecto sobre la barra de proceso
    $("#barraE").mouseenter(function(){
        $("#barraE").animate({fontSize: '18px'});
    });
    $("#barraE").mouseleave(function(){
        $("#barraE").animate({fontSize: '14px'});
    });

    // Ocultar/mostrar lista contactos
    $("#mContactos").click(function(){
        if (banderaUsuarios==0){
            $("#listaContactos").fadeToggle("slow");
            document.getElementById("mContactos").textContent = "Mostrar";
            banderaUsuarios=1;
        }
        else{
            $("#listaContactos").fadeToggle("slow");
            document.getElementById("mContactos").textContent = "Ocultar";
            banderaUsuarios=0;
        }
    });

    //Lectura JSON estático con instituciones para el parto
    const URLJSON = "json/inst.json";
    // Escucho evento
    $.getJSON(URLJSON,function(respuesta,estado){
        if(estado=="success"){
            let misDatos=respuesta;
            for(const dato of misDatos){
                $("#myHops").prepend("<option>"+dato+"</option>");
            }
            document.getElementById("myHops").value = localStorage.getItem('instParto');
        }
    });

    //Lectura JSON estático con tamaños de bebes según semana de gestación
    const URLJSON2 = "json/tamano.json";
    // Escucho evento
    $.getJSON(URLJSON2,function(respuesta,estado){
        if(estado=="success"){
            datosTamano=respuesta;
        }
    });
});