
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

// Agregue un símbolo de "marcado" al hacer clic en un elemento de la lista
var list = document.querySelector('ol');
list.addEventListener('click', function(ev) {
  if (ev.target.tagName === 'LI') {
    ev.target.classList.toggle('checked');
  }
}, false);

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
const N = [ "Javier", "Elena", "Pablo", "Lucía"];
const R = []

const playclick = document.getElementById("playclick");

playclick.addEventListener("click", RespondClick);


function RespondClick(){
    aleatorio = N [Math.floor(Math.random() * N.length)];
    
    while (R.includes(aleatorio)){
        aleatorio = N [Math.floor(Math.random() * N.length)]; 
    } 
        R.push(aleatorio);
  console.info (R);
    if (R.length == N.length){
        alert("Fin del juego");
    }
}