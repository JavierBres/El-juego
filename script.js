
// Crea un botón "cerrar" y añádelo a cada elemento de la lista
var myNodelist = document.getElementsByTagName("LI");
var i;
for (i = 0; i < myNodelist.length; i++) {
  var span = document.createElement("SPAN");
  var img = document.createElement("img");
  img.src= '../images/asesino.png'
  document.body.appendChild("img");
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
// Elección aleatoria de jugador
let N = [ "Javier", "Elena", "Pablo", "Lucía"];
let R = []

playclick.addEventListener("click", RespondClick);


function RespondClick(){
    aleatorio = N [Math.floor(Math.random() * N.length)];
        while (R.includes(aleatorio)){
          aleatorio = N [Math.floor(Math.random() * N.length)];
        } 
    R.push(aleatorio);
    console.info(aleatorio);
    document.getElementById("muerto").innerHTML = aleatorio;

    if (R.length === N.length){
      setTimeout (()=>{alert("Fin del juego")},500);
    }
    }
    

    

  