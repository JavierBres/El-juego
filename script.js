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