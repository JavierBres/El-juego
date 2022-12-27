const N = [ "Javier", "Elena", "Pablo", "Lucía"];
const R = []
let muertos = document.querySelector(".muertos");
const playclick = document.getElementById("playclick");

playclick.addEventListener("click", RespondClick);


function RespondClick(){
    aleatorio = N [Math.floor(Math.random() * N.length)];
    
    while (R.includes(aleatorio)){
        aleatorio = N [Math.floor(Math.random() * N.length)]; 
    } 
        R.push(aleatorio);
    muertos.innerHTML += aleatorio;

}

function FinDelJuego(){

    if (R.length === N.length){
        
    return "Fin del juego";
}

}