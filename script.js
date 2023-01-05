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


// Crear un nuevo elemento de lista al hacer clic en el botón "Agregar"
let lives = [];
function newElement() {
  var li = document.createElement("li");
  var inputValue = document.getElementById("myInput").value;
  var t = document.createTextNode(inputValue);
  li.appendChild(t);
  if(inputValue === ''){
  }else{
  document.getElementById("myOL").appendChild(li);}
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

let dead = [];

const playclick = document.getElementById("playclick");

playclick.addEventListener("click", RespondClick);

         
function RespondClick() {
  aleatorio = lives[Math.floor(Math.random() * lives.length)];
  
  while (dead.includes(aleatorio)) {
    aleatorio = lives[Math.floor(Math.random() * lives.length)];
  }
  dead.push(aleatorio);
  
  console.info( dead );

  document.getElementById("muerto").innerHTML = aleatorio;
  
  if (dead.length === lives.length) {
    setTimeout (()=>{alert("Fin del juego")},1000);
  }
}

//funcion eliminar  jugadores de lista y array a la vez, no funcniona!!!
function deleteLives (){
  for(var i = lives.length - 1; i >= 0; i--) {
    if(lives[i] === number) {
       lives.splice(i, 1);
    }
}
}
// let dataList = data.filter((value, index, array) => {
//   return array.indexOf(value) == index;
// })

console.info (deleteLives)


 console.info(lives)
 





