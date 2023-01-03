
// Crea un botón "cerrar" y añádelo a cada elemento de la lista
var myNodelist = document.getElementsByTagName("LI");
var i;
for (i = 0; i < myNodelist.length; i++) {
  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  myNodelist[i].appendChild(span);
}

// Haga clic en un botón de cierre para ocultar el elemento de la lista actual
var close = document.getElementsByClassName("close");
var i;
for (i = 0; i < close.length; i++) {
  close[i].onclick = function() {
    var div = this.parentElement;
    div.style.display = "none";
  }
}

// Crear un nuevo elemento de lista al hacer clic en el botón "Agregar"
function newElement() {
  var li = document.createElement("li");
  var inputValue = document.getElementById("myInput").value;
  var t = document.createTextNode(inputValue);
  li.appendChild(t);
  document.getElementById("myOL").appendChild(li);
  document.getElementById("myInput").value = "";

  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  li.appendChild(span);

  for (i = 0; i < close.length; i++) {
    close[i].onclick = function() {
      var div = this.parentElement;
      div.style.display = "none";
    }
  }
}

let buttonPlayer = document.querySelector(".selfclick")

    buttonPlayer.addEventListener("click", () => {
    audioEtiqueta.setAttribute("src", "./sound/inicio_juego.mp3")
    audioEtiqueta.play()
    console.log(`Reproduciendo: ${audioEtiqueta.src}`)
    })

// let boton = document.querySelector(".reproductor")

//   boton.addEventListener("click", () => {
//     let etiquetaAudio = document.createElement("audio")
//     etiquetaAudio.setAttribute("src", "ubicación de tu archivo de audio")
//     etiquetaAudio.play()
//     })