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

    // Efecto sobre la barra de proceso
    $("#barraE").mouseenter(function(){
        $("#barraE").animate({fontSize: '18px'});
    });
    $("#barraE").mouseleave(function(){
        $("#barraE").animate({fontSize: '14px'});
    });

    // Prueba para animaciones concatenadas
    $("#mContactos").click(function(){
        $("#pContactos").animate({
            height:'1px'
        }, function(){
            $("#pContactos").animate({height:'250px'});
        });
    });


});