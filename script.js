// Crea un botón "cerrar" y añádelo a cada elemento de la lista
var myNodelist = document.getElementsByTagName("li");
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

// Agregue un símbolo de "marcado" al hacer clic en un elemento de la lista
var list = document.querySelector('ol');
list.addEventListener('click', function(ev) {
  if (ev.target.tagName === 'LI') {
    ev.target.classList.toggle('checked');
  }
}, false);

// Crear un nuevo elemento de lista al hacer clic en el botón "Agregar"
let lives = ["javi","elena","lucia","pablo","diego"];
function newElement() {
  var li = document.createElement("li");
  var inputValue = document.getElementById("myInput").value;
  var t = document.createTextNode(inputValue);
  li.appendChild(t);
  document.getElementById("myOL").appendChild(li);
  document.getElementById("myInput").value = "";
  lives.push(inputValue)

  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  li.appendChild(span);

  for (i = 0; i < close.length; i++) {
    close[i].onclick = function () {
      var div = this.parentElement;
      div.style.display = "none";
    }
  }
  console.info(lives)
}





const dead = [];

const playclick = document.getElementById("playclick");

playclick.addEventListener("click", RespondClick);

         
function RespondClick() {
  aleatorio = lives[Math.floor(Math.random() * lives.length)];
  
  while (dead.includes(aleatorio)) {
    aleatorio = lives[Math.floor(Math.random() * lives.length)];
  }
  dead.push(aleatorio);
  
  console.info(dead);
  
  document.getElementById("muerto").innerHTML = aleatorio;
  
  if (dead.length === lives.length) {
    setTimeout (()=>{alert("Fin del juego")},1000);
  }
}

// function deleteLives (itemLive){

// }

 console.info(lives)
 





