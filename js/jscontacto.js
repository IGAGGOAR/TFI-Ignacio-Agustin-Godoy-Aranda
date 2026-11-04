document.addEventListener("DOMContentLoaded",() =>{
console.log("Script Funcionando");
const form = document.getElementById("formContacto");
const inputNombre = document.getElementById("nombre");
const inputEmail= document.getElementById("email");
const inputTelefono = document.getElementById("telefono");
const inputMensaje= document.getElementById("mensaje");


const errorNombre= document.getElementById("errorNombre");
const errorEmail= document.getElementById("errorEmail")
const errorTelefono = document.getElementById("errorTelefono");
const errorMensaje = document.getElementById("errorMensaje");

const contenedorResumen = document.getElementById("resumenEnvio");

const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const regexTelefono = /^[0-9\s\+\-\(\)]{7,13}$/;

if (!form){
    console.error("No se encontro el formulario ID #formContacto");
    return;
}
form.addEventListener("submit",function(evento){
    evento.preventDefault();
    if(errorNombre) errorNombre.textContent = "";
    if(errorEmail) errorEmail.textContent = "";
    if(errorTelefono) errorTelefono.textContent = "";
    if(errorMensaje) errorMensaje.textContent = "";
    if(contenedorResumen){
        contenedorResumen.innerHTML = "";
        contenedorResumen.style.display = "none";
    }
let esValido = true;
const valorNombre = inputNombre ? inputNombre.value.trim() : "";
const valorEmail= inputEmail ? inputEmail.value.trim() : "";
const valorTelefono = inputTelefono ? inputTelefono.value.trim(): "";
const valorMensaje = inputMensaje ? inputMensaje.value.trim() : "";

if(valorNombre === ""){
    if (errorNombre) errorNombre.textContent = "El campo nombre es obligatorio"
    esValido = false;
}else if (valorNombre.length < 3){
    if(errorNombre) errorNombre.textContent = "El nombre debe tener almenos 3 caracteres";
    esValido= false;

}
if (valorEmail === ""){
    if (errorEmail) errorEmail.textContent = "El campo de correo es obligatorio";
    esValido = false;
}else if (!regexEmail.test(valorEmail)){
    if(errorEmail) errorEmail.textContent = "Formato de correo invalido";
    esValido=false;
}
if(valorTelefono === ""){
    if(errorTelefono) errorTelefono.textContent = "El campo de telefono es obligatorio"
    esValido= false;
}else if(!regexTelefono.test(valorTelefono)){
    if (errorTelefono) errorTelefono.textContent="Ingrese un numero valido (entre 7 y 13 digitos)"
    esValido = false;
}
if (valorMensaje === ""){
    if(errorMensaje) errorMensaje.textContent= "El mensaje es obligatorio";
    esValido = false;

}else if (valorMensaje.length < 10){
    if(errorMensaje) errorMensaje.textContent = "El mensaje debe tener almenos 10 caracteres";
    esValido = false;
}
if (esValido){
    form.reset();
    if(contenedorResumen){
        const tituloResumen = document.createElement("h3");
        tituloResumen.textContent = "Mensaje enviado con exito";

        const parrafoInf = document.createElement("p");
        parrafoInf.textContent = "Estos son los datos que enviaste"

        const listaDatos = document.createElement("ul");

        const itemNombre = document.createElement("li");
        itemNombre.innerHTML = `<strong>Nombre:</strong>${valorNombre}`;

        const itemEmail = document.createElement("li");
        itemEmail.innerHTML = `<strong>Correo:</strong>${valorEmail}`;

        const itemTelefono = document.createElement("li");
        itemTelefono.innerHTML = `<strong>Telefono:</strong>${valorTelefono}`;

        const itemMensaje = document.createElement("li");
        itemMensaje.innerHTML = `<strong>Mensaje:</strong>${valorMensaje}`;

        listaDatos.appendChild(itemNombre);
        listaDatos.appendChild(itemEmail);
        listaDatos.appendChild(itemTelefono);
        listaDatos.appendChild(itemMensaje);
        contenedorResumen.appendChild(tituloResumen);
        contenedorResumen.appendChild(parrafoInf);
        contenedorResumen.appendChild(listaDatos);
        contenedorResumen.style.display = "block";


    }
}
});
});