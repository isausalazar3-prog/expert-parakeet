
function mostrarNumeros(){

let contenedor = document.getElementById("numeros");
contenedor.innerHTML="";

for(let i=0;i<100;i++){

let numero=document.createElement("div");

numero.classList.add("numero");

numero.innerText=i.toString().padStart(2,"0");

numero.onclick=function(){
alert("Elegiste el número "+numero.innerText+"\nAhora envía el formulario para apartarlo.");
};

contenedor.appendChild(numero);

}

}
