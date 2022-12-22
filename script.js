var items =[];
function añadirnombre() {//llamamos a la funcion
  boxvalue = document.getElementById("box").value;
  items.push(boxvalue);//hacemos un push al Array "items" con el 
  return false;                                           
}
function restarnombre(){
  boxvalue = document.getElementById("restbox").value;
  items.slice(start,1)
}
  console.log(items);