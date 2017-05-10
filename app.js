alert("mensaje");

var cerrarpandaUno = document.getElementsByClassName('bordeImagen');


for( var i=0; i< cerrarpandaUno.length; i++){
  cerrarpandaUno[i].addEventListener("click", function(){
    this.style.display= "none";
  });
}



// function cerrarImagen() {
//   cerrarpandaUno.style.display="none";
// }


// cerrarpandaUno.addEventListener("click", cerrarImagen);
