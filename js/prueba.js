var puntaje = 0;

function iniciar () {
	var b3 = document.getElementById("boton3");

	b3.addEventListener("click", corregir)
	
}


function corregir () {
	var h = document.getElementById("hola");
	var texto = "hola";
	var c = document.getElementById("color");

    var p = document.getElementById("palabra");
	
	var cor = document.getElementById("correccion");

	var palabra = p.value;
	palabra = palabra.toUpperCase();
	
	var i;
	for (i=0; i< document.guerra.mundial.length;i++){
       if (document.guerra.mundial[i].checked)
          break;
    }
    if(document.guerra.mundial[i].value == "1939"){
   		h.innerText = "Respuesta correcta";
   		h.style.background = "#06a306";
   		puntaje++;
	}
    else{
    	h.innerText = "Respuesta incorrecta";
    	h.style.background = "red";
    }
    var i = document.getElementById("ingles");

    if(palabra == "HELLO" || palabra == "HI"){
    	i.innerText = "Respuesta correcta";
    	i.style.background = "#06a306";
    	puntaje++;
    }
    else{
    	i.innerText = "Respuesta incorrecta";
    	i.style.background = "red";
    }
    if(puntaje >= 2){
		cor.innerText = "Felicidades, has aprobado";
		cor.style.background = "#06a306";
		console.log("si funciona");
	}
	else{
		cor.innerText = "Intenta otra vez recargando la pagina";
		cor.style.background = "red";
		console.log("si funciona");
	}
}

