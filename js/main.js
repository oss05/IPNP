const definicionLogica = document.getElementById('definicionLogica');
const definicionLogicaButton = document.getElementById('definicionLogicaButton');
const concepto = document.getElementById('concepto');
const conceptoButton = document.getElementById('conceptoButton');
const arbolPorfirio = document.getElementById('arbolPorfirio');
const arbolPorfirioButton = document.getElementById('arbolPorfirioButton');
const juicio = document.getElementById('juicio');
const juicioButton = document.getElementById('juicioButton');
const cuadroOposicion = document.getElementById('cuadroOposicion');
const cuadroOposicionButton = document.getElementById('cuadroOposicionButton');

function definicionLogicaExec(){
    definicionLogica.classList.remove("definicionLogica")
    concepto.classList.add("concepto")
    arbolPorfirio.classList.add("arbolPorfirio")
    juicio.classList.add("juicio")
    cuadroOposicion.classList.add("cuadroOposicion")
}

function conceptoExec(){
    concepto.classList.remove("concepto")
    definicionLogica.classList.add("definicionLogica")
    arbolPorfirio.classList.add("arbolPorfirio")
    juicio.classList.add("juicio")
    cuadroOposicion.classList.add("cuadroOposicion")
}

function arbolPorfirioExec(){
    arbolPorfirio.classList.remove("arbolPorfirio")
    concepto.classList.add("concepto")
    definicionLogica.classList.add("definicionLogica")
    juicio.classList.add("juicio")
    cuadroOposicion.classList.add("cuadroOposicion")
}

function juicioExec(){
    juicio.classList.remove("juicio")
    concepto.classList.add("concepto")
    definicionLogica.classList.add("definicionLogica")
    arbolPorfirio.classList.add("arbolPorfirio")
    cuadroOposicion.classList.add("cuadroOposicion")
}

function cuadroOposicionExec(){
    cuadroOposicion.classList.remove("cuadroOposicion")
    concepto.classList.add("concepto")
    definicionLogica.classList.add("definicionLogica")
    arbolPorfirio.classList.add("arbolPorfirio")
    juicio.classList.add("juicio")
}


definicionLogicaButton.addEventListener("click", definicionLogicaExec);
conceptoButton.addEventListener("click", conceptoExec);
arbolPorfirioButton.addEventListener("click", arbolPorfirioExec);
juicioButton.addEventListener("click", juicioExec);
cuadroOposicionButton.addEventListener("click", cuadroOposicionExec);