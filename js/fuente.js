
//operandos
var operandoa;
var operandob;
var operacion;

function init(){
    alert("bienvenido a la calculadora");
    //resultados
    var resultado = document.getElementById("resultado");
    const displayValorAnterior = document.getElementById("valor-anterior");
    
    //acciones
    var CE = document.getElementById("CE");
    CE.onclick = function(e){
    if(operacion === "+"||"-"||"*"||"/" ){
            operandob= "";
            resultado.textContent= "";
        } else{
            operandoa="";
            resultado.textContent ="";
        }
    }
    var C = document.getElementById("C");
    C.onclick = function(e){
        resetear();
    }
    var retrocesos = document.getElementById("retrocesos");
    retrocesos.onclick= function(e){
        retro()
    }

    var fracciones = document.getElementById("fracciones");
    fracciones.onclick = function(e){
        resultado.textContent = 1/(resultado.textContent);
    }
    var porcentajes = document.getElementById("porcentajes");
    porcentajes.onclick = function(e){
        operandob = (operandoa/100)*resultado.textContent;
        limpiar();
        resolver();
    }
    var cuadrados = document.getElementById("cuadrados");
    cuadrados.onclick = function(e){
        resultado.textContent = Math.pow(resultado.textContent,2);
    }
    var raices = document.getElementById("raices");
    raices.onclick = function(e){
        resultado.textContent = Math.sqrt(resultado.textContent);
    }
    var diviciones = document.getElementById("diviciones");
    diviciones.onclick = function(e){
        operandoa = resultado.textContent;
        operacion = "/";
        limpiar();
    }
    var multiplicaciones = document.getElementById("multiplicaciones");
    multiplicaciones.onclick = function(e){
        operandoa = resultado.textContent;
        operacion = "*";
        limpiar();
    }
    var restas = document.getElementById("restas");
    restas.onclick = function(e){
        operandoa = resultado.textContent;
        operacion = "-";
        limpiar();
    }
    var sumas = document.getElementById("sumas");
    sumas.onclick = function(e){
        operandoa = resultado.textContent;
        operacion = "+";
        limpiar();
    }
    var signos = document.getElementById("signos");
    signos.onclick = function(e){
            resultado.textContent = resultado.textContent* -1;
    }
    var puntos = document.getElementById("puntos");
    puntos.onclick = function(e){
        if(resultado.textContent.includes(".")){
            resultado.textContent = resultado.textContent;
        } else {
        resultado.textContent = resultado.textContent + ".";
        }
    }
    var iguales = document.getElementById("iguales");
    iguales.onclick = function(e){
        operandob = resultado.textContent;
        resolver();
        fijador();
    }
    //I lov u Yina = true;
    //numeros
    var uno = document.getElementById("uno");
    uno.onclick = function(e){
        resultado.textContent = resultado.textContent + "1";
    }
    var dos = document.getElementById("dos");
    dos.onclick = function(e){
        resultado.textContent = resultado.textContent + "2";
    }
    var tres = document.getElementById("tres");
    tres.onclick = function(e){
        resultado.textContent = resultado.textContent + "3";
    }
    var cuatro = document.getElementById("cuatro");
    cuatro.onclick = function(e){
        resultado.textContent = resultado.textContent + "4";
    }
    var cinco = document.getElementById("cinco");
    cinco.onclick = function(e){
        resultado.textContent = resultado.textContent + "5";
    }
    var seis = document.getElementById("seis");
    seis.onclick = function(e){
        resultado.textContent = resultado.textContent + "6";
    }
    var siete = document.getElementById("siete");
    siete.onclick = function(e){
        resultado.textContent = resultado.textContent + "7";
    }
    var ocho = document.getElementById("ocho");
    ocho.onclick = function(e){
        resultado.textContent = resultado.textContent + "8";
    }
    var nueve = document.getElementById("nueve");
    nueve.onclick = function(e){
        resultado.textContent = resultado.textContent + "9";
    }
    var cero = document.getElementById("cero");
    cero.onclick = function(e){
        resultado.textContent = resultado.textContent + "0";
    }
}

// funciones
function limpiar(){
    resultado.textContent = "";
}
function resetear(){
    resultado.textContent = "";
    operandoa = 0;
    operandob = 0;
    operacion = "";
}
function fijador(){
    if(res==0){
        secundarias.textContent = operandoa;
    } else {
        secundarias.textContent = res + " " + operacion + " " + operaciona;
    }
}
function resolver(){
    var res = 0;
    switch(operacion){
        case "+":
            res = parseFloat(operandoa) + parseFloat(operandob);
            break;
        case "-":
            res = parseFloat(operandoa) - parseFloat(operandob);
            break;
        case "*":
            res = parseFloat(operandoa) * parseFloat(operandob);
            break;
        case "/":
            res = parseFloat(operandoa) / parseFloat(operandob);
            break;
        
    }
    resetear();
    resultado.textContent= res;
}

