// Crea un botón "cerrar" y añádelo a cada elemento de la lista
var myNodelist = document.getElementsByTagName("li");
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


// let Name = [];
let Name = document.getElementById("myOL");
let items = document.getElementsByTagName("li");

for (let i=0; i<items.length; ++i) {
  items[i].innerHTML
}
console.info(Name)

// function getDataFromList(id) {
//   let data = [...document.querySelectorAll(`#${id} li`)]
//     .map(element => element.innerText);

//   console.log(data);
// }

// getDataFromList('myOL');
// console.info(Name)

// function añadir() {
//   let player = document.getElementById('myInput').value.split(" ");
//   Name = Name.concat(player);
//   document.getElementById('myInput').value = ""; 
//   console.info(Name);
//   document.getElementById("myOL").innerHTML = Name.join("<li>")
//   }
 
   
  //   let list = document.getElementById("myOL");
  //  for( i = 0; i < Name.length; i++){
  //   var li = document.createElement("li");
  //   li.innerText= Name[i];
  //   list.appendChild(li);
  //   };
  




const dead = [];


const playclick = document.getElementById("playclick");

playclick.addEventListener("click", RespondClick);


function RespondClick(){
    aleatorio = Name [Math.floor(Math.random() * Name.length)];
    
    while (dead.includes(aleatorio)){
        aleatorio = Name [Math.floor(Math.random() * Name.length)]; 
    } 
        dead.push(aleatorio);
  console.info (aleatorio);
    if (dead.length == Name.length){
        alert("Fin del juego");
    }
}



