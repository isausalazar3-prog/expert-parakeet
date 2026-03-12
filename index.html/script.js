
function mostrarNumeros(){

let contenedor = document.getElementById("numeros")
contenedor.innerHTML=""

for(let i=0;i<100;i++){

let numero=document.createElement("div")

numero.classList.add("numero")

numero.innerText=i.toString().padStart(2,"0")

numero.onclick=function(){

let num = numero.innerText

let telefono="523345143806"

let mensaje="Hola, quiero apartar el numero "+num+" de la rifa de Mexirifas"

let url="https://wa.me/"+telefono+"?text="+encodeURIComponent(mensaje)

window.open(url,"_blank")

}

contenedor.appendChild(numero)

}

}
