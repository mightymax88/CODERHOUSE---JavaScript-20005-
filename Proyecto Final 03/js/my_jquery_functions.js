// jQuery addition
$(document).ready(function(){

    // Ocultar algunos campos al inicio
    $("#info1").hide();
    $("#info2").hide();
    $("#info3").hide();
    $("#info4").hide();
    $("#monitor1").fadeToggle("fast");

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

    // Agregando AJAX
    $("#signoZod").click(function(){

        if(checku!=0){
            // Averigua signo del zodíaco
            function zodiac(day, month){
            var zodiac =['', 'capricorn', 'aquarius', 'pisces', 'aries', 'taurus', 'gemini', 'cancer', 'leo', 'virgo', 'libra', 'scorpio', 'sagittarius', 'capricorn'];
            var last_day =['', 19, 18, 20, 20, 21, 21, 22, 22, 21, 22, 21, 20, 19];
            return (day > last_day[month]) ? zodiac[month*1 + 1] : zodiac[month];
            }

            var z_sign = zodiac(dasd.getDate(), dasd.getMonth());

            let direccionZ = "https://aztro.sameerkumar.website?sign="+z_sign+"&day=today";
    
            $.ajax({
                type:'POST',
                url: direccionZ,
                success:function(data){
                alert("Su signo será: "+z_sign+"\n"
                +"Su color astral: "+data.color+ "\n"
                +"Su número de la suerte: "+data.lucky_number+ "\n"
                +"Su horario de la suerte: "+data.lucky_time+ "\n"
                +"Su humor: "+data.mood+ "\n"
                +"Su signo compatible: "+data.compatibility+ "\n"
                +"Su horóscopo para el día de hoy: "+data.description+ "\n");
                document.getElementById("signoM").textContent = z_sign + " / " + data.compatibility.toLowerCase();
            }
            });
        }
        else{
            alert("Todavía no ha calculado la FPP!");
        }
        
    });


});