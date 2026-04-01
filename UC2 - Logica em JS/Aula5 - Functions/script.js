function show_camada1(){
    document.getElementById("camada1").style.visibility = "visible"
    document.getElementById("camada2").style.visibility = "hidden"
    document.getElementById("camada3").style.visibility = "hidden";
}

function show_camada2(){
    document.getElementById("camada1").style.visibility = "hidden"
    document.getElementById("camada2").style.visibility = "visible"
    document.getElementById("camada3").style.visibility = "hidden";
}

function show_camada3(){
    document.getElementById("camada1").style.visibility = "hidden"
    document.getElementById("camada2").style.visibility = "hidden"
    document.getElementById("camada3").style.visibility = "visible";
}

function hide(){
    document.getElementById("camada1").style.visibility = "hidden"
    document.getElementById("camada2").style.visibility = "hidden"
    document.getElementById("camada3").style.visibility = "hidden";
}


