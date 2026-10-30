const imgCarrusel = [
    "assets/anillo.jpg",
    "assets/aros.jpg",
    "assets/collar.jpg"
];

let indiceActual=0;

const imgElemento = document.getElementById("imagenCarrusel");
const btnAnterior = document.getElementById("btnAnterior");
const btnSiguiente = document.getElementById("btnSiguiente");

function actualizarImagen(){
    imgElemento.src = imgCarrusel[indiceActual];
    imgElemento.alt = "Joya exhibida"+ (indiceActual + 1)+ "de Sol Naciente";
}

function siguienteImagen(){
    indiceActual++;
    if(indiceActual>=imgCarrusel.length){
        indiceActual=0;
    }
    actualizarImagen();
}
function anteriorImagen(){
    indiceActual--;
    if(indiceActual<0){
        indiceActual=imgCarrusel.length -1;
    }
    actualizarImagen();
}
btnSiguiente.addEventListener("click",siguienteImagen);
btnAnterior.addEventListener("click",anteriorImagen);
actualizarImagen();
