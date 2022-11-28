const fecha = document.querySelector('#fecha')
const lista = document.querySelector('#lista')
const elemento = document.querySelector('#elemento')
const input = document.querySelector('#input')
const botonEnter = document.querySelector('#boton-enter')
const check = 'fa-check-circle'
const uncheck = 'fa-circle'
const lineThrough = 'line-through'
let LIST

let id // para que inicie en 0 cada tarea tendra un id diferente

//creacion de fecha actualizada 

const FECHA = new Date ()
fecha.innerHTML = FECHA.toLocaleDateString('es-MX',{weekday: 'long', month: 'short', day:'numeric'})

//limite de caracteres
 
var mytext = documen.getElementById("my-text");
var result = documen.getElementById("result");
var limit = 64;
result.textContent = 0 + "/" + limit;
mytext.addEventListener("input",function(){
    var textLength = myText.value.textLength;
    result.textContent = textLength + "/" + limit;

    if(textLength > limit){
        myText.style.borderColor = "#ff2851";
        result.stylecolor = "#ff2851";
    }
    else{
        myText.style.borderColor = "#b2b2b2";
        result.style.color = "#737373";
    }
});