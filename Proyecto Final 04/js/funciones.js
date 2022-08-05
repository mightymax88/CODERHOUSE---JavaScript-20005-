// Archivo con funciones del sitio web

// Calcula la FPP a partir de la FUM
function calcularFPP() {
    fum=capturaFUM();
    bebe.push(new Bebe("Beb@",0,"días","Apellido"));
    bebe[0].calcula_fpp(fum);
    document.getElementById("demo").textContent=bebe[0].parto;
    bebe[0].calcula_semana();
    //Muestro el panel
    if (bandCalculo==0){
        document.getElementById("bCalcular").textContent="Recalcular";
        bandCalculo=1;
    }
    // Actualizo porcentaje
    EmbPorc();
    // Bandera de calculo
    checku = 1;
    localStorage.setItem('estadoC',checku);
    calculoHoroscopo();
}

// Función para obtener el nombre del bebe, guardarlo en LocalStorage y mostrarlo en HTML
function calculaNombreBB(){
    let name = prompt("Introducir nombre:");
    // Guardo el nombre en Localstorage (el nombre también aparecerá la próxima vez que se muestre abra la ventana)
    localStorage.setItem('nombreBeBe',name);
    // Muestro el nombre
    document.getElementById("nombreBB").textContent=name;
}

// Captura fecha de última menstruación (FUM)
function capturaFUM() {
    res=$("#campoFUM").val();
    fechad=Number(res.slice(0,2));
    fecham=Number(res.slice(3,5));
    if((res.length==5)&&(res.slice(2,3)=="/")&&(Number.isInteger(fechad))&&(Number.isInteger(fecham))&&(fechad<32)&&(fecham<13)){
        bandSigo=1;
    }
    else{
        alert("Formato incorrecto, indicar FUM nuevamente (respetar XX/XX)");
        bandSigo=0;
    }
    localStorage.setItem('fum',res);
    return res;
}

//Felicita en función del género seleccionado
function elijoGenero() {
    prefer = document.forms[0].myGenero.value;
    if (prefer=="Niño"){
        document.getElementById("sexoBB").className="fa fa-mars";
        localStorage.setItem('sexo',"fa fa-mars");
        localStorage.setItem('sexoN',"Niño");
    }
    if (prefer=="---"){
        document.getElementById("sexoBB").className="fa fa-question-circle-o";
        localStorage.setItem('sexo',"fa fa-question-circle-o");
        localStorage.setItem('sexoN',"---");
    }
    if (prefer=="Niña"){
        document.getElementById("sexoBB").className="fa fa-venus";
        localStorage.setItem('sexo',"fa fa-venus");
        localStorage.setItem('sexoN',"Niña");
    }
}

// Cambio proxima fecha
function cambiofecha(){
    let fechaprox=$("#proxFecha").val();
    localStorage.setItem('proximaFecha',fechaprox);
}

// Cambio Hospital
function cambioHospital(){
    let lugarHosp=$("#myHops").val();
    localStorage.setItem('instParto',lugarHosp);
}

// Calcular porcentaje en función a semanas
function EmbPorc() {
    let semg = document.getElementById("demo2");
    let porc = Math.floor(parseInt(semg.textContent)/40*100);
    let porct = porc + "%";
    localStorage.setItem('porcNumero',porc);
    localStorage.setItem('porcTotal',porct);
    document.getElementById("barraEmb").textContent = porc + "%";
    document.getElementById("barraE").style.width = porct;
}

// Agrego Event en bloques
function FPPOn() {
    document.getElementById("cajaFPP2").textContent = "Fecha Probable de Parto"
}
function FPPOut() {
    document.getElementById("cajaFPP2").textContent = "FPP"
}
function SemOn() {
    document.getElementById("cajaSem2").textContent = "Semanas de gestación"
}
function SemOut() {
    document.getElementById("cajaSem2").textContent = "Semana"
}
function TamOn() {
    let semg = Math.floor(edadEnDias/7);
    if((semg<43)&&(semg>1)){
        let frase = "Como un/a "+ datosTamano[semg-1].enp;
        document.getElementById("cajaTam2").textContent = frase;
    }
    if(semg>=43){
        let frase = "Como un/a "+ datosTamano[41].enp;
        document.getElementById("cajaTam2").textContent = frase;
    }
    if(semg<=1){
        let frase = "Como un/a "+ datosTamano[1].enp;
        document.getElementById("cajaTam2").textContent = frase;
    }
}
function TamOut() {
    document.getElementById("cajaTam2").textContent = "Tamaño [cm]"
}
function DiasOn() {
    document.getElementById("cajaD2").textContent = "... hasta 40 semanas"
}
function DiasOut() {
    document.getElementById("cajaD2").textContent = "Días restantes"
}

function calculoHoroscopo(){
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
                document.getElementById("signoM").textContent = z_sign + " / " + data.compatibility.toLowerCase();
                localStorage.setItem('signoZod',z_sign + " / " + data.compatibility.toLowerCase());
            }
        });
        
}