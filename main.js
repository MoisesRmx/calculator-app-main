// temas
const contenedor = [...document.querySelectorAll('.contenedor')];
const cabeceraTitulo = document.querySelector('.cabecera-titulo');
const controladorTemas = document.querySelector('.controlador-temas');
const controladorTemasColor = document.querySelector('.controlador-temas-color');
const controladorTemasColorUno = document.querySelector('.controlador-temas-color-uno');
const controladorTemasColorDos = document.querySelector('.controlador-temas-color-dos');
const controladorTemasColorTres = document.querySelector('.controlador-temas-color-tres');
const controladorLlave = document.querySelector('.controlador-llave');
const controladorLlaveBoton = document.querySelector('.controlador-llave-boton');
const seccionUno = document.querySelector('.seccion-1');
const pantalla = document.querySelector('.pantalla');
const seccionDos = document.querySelector('.seccion-2');
const boton = [...document.querySelectorAll('.boton')];
const borrar = document.querySelector('.borrar');
const resetear = document.querySelector('.resetear');
const igual = document.querySelector('.igual');

const temasClass = contenedor.concat(cabeceraTitulo, controladorTemas, controladorTemasColor, controladorTemasColorUno, controladorTemasColorDos, controladorTemasColorTres, controladorLlave, controladorLlaveBoton, seccionUno, pantalla, seccionDos, boton, borrar, resetear, igual);

controladorTemasColorUno.addEventListener('click', () => {
  temasClass.map(temasClass => {
    temasClass.classList.remove('blanco', 'morado');
  });
});

controladorTemasColorDos.addEventListener('click', () => {
  temasClass.map(temasClass => {
    temasClass.classList.add('blanco');
    temasClass.classList.remove('morado');
  });
});

controladorTemasColorTres.addEventListener('click', () => {
  temasClass.map(temasClass => {
    temasClass.classList.add('morado');
    temasClass.classList.remove('blanco');
  });
});


// calcular
const botonNumeros = document.getElementsByName('numeros');
const botonOperacion = document.getElementsByName('operacion');
const botonIgual = document.getElementsByName('igual')[0];
const botonResetear = document.getElementsByName('resetear')[0];
const botonBorrar = document.getElementsByName('borrar')[0];
var pantallaResultado = document.getElementById('pantalla-resultado');
var operacionActual = '';
var operacionAnterior = '';
var operacion = undefined;

botonNumeros.forEach(function(boton){
  boton.addEventListener('click', function() {
    agregarNumero(boton.innerText);
  });
});

botonOperacion.forEach(function(boton){
  boton.addEventListener('click', function(){
    selectOperacion(boton.innerText);
  });
});

botonIgual.addEventListener('click', function(){
  calcular();
  actualizarDisplay();
});

botonResetear.addEventListener('click', function(){
  reset();
  actualizarDisplay();
});

botonBorrar.addEventListener('click', function() {
  borrarfc();
  actualizarDisplay(); 
});

function selectOperacion(op){
  if(operacionActual === '') return;
  if(operacionAnterior !== ''){
    calcular()
  }
  operacion = op.toString();
  operacionAnterior = operacionActual;
  operacionActual = '';
}

function calcular(){
  var calculo;
  const anterior = parseFloat(operacionAnterior);
  const actual = parseFloat(operacionActual);
  if(isNaN(anterior) || isNaN(actual)) return;
  switch(operacion){
    case '+':
        calculo = anterior + actual;
        break;
    case '-':
        calculo = anterior - actual;
        break;
    case 'x':
        calculo = anterior * actual;
        break;
    case '/':
        calculo = anterior / actual;
        break;
    default:
        return;
  }
  operacionActual = calculo;
  operacion = undefined;
  operacionAnterior = '';
}

function agregarNumero(num){
  operacionActual = operacionActual.toString() + num.toString();
  actualizarDisplay();
}

function reset(){
  operacionActual = '';
  operacionAnterior = '';
  operacion = undefined;
}

function actualizarDisplay(){
  pantallaResultado.innerText = operacionActual;
}

function borrarfc(){
  operacionActual = operacionActual.slice(0,-1);
}
