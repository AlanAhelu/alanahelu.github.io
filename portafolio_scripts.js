let barradenavegacion = document.getElementById("barradenavegacion");
let btninicioresponsive = document.getElementById("btninicioresponsive");
let btnresponsive = document.getElementById("btnresponsive");
let bdnresponsive = document.getElementById("bdnresponsive");
function mostrarbdnresponsive(){
    // let bdnresponsivevalor = document.querySelector(".bdnresponsive");
    let estilos1 = getComputedStyle(bdnresponsive, null);
    let bdnresponsivevalor = estilos1.getPropertyValue("display");
    // alert(bdnresponsivevalor);
    // alert(style.display);
    if(bdnresponsivevalor == "block"){
        bdnresponsive.style.display = "none";
        btninicioresponsive.style.display = "flex";
        // barradenavegacion.style.height = "61px";
    }else if(bdnresponsivevalor == "none"){
        bdnresponsive.style.display = "block";
        btninicioresponsive.style.display = "none";
        // barradenavegacion.style.height = "184px";
    }else{
        alert("Hola mundo");
    }
}
btnresponsive.addEventListener("click",mostrarbdnresponsive);