function login(){
    var user = document.getElementById("user");
    var psw = document.getElementById("user");

    if(user.value == "" || psw.value == ""){
        alert("Llene todos los campos");
    }else{
        var nodoPadre = document.getElementById("rectangulo_middle");
        while (nodoPadre.firstChild) {
            nodoPadre.removeChild(nodoPadre.firstChild);
        }        
        var gif = document.createElement("img");

        gif.src = "./images/loading.gif";
        gif.id = "gif";

        nodoPadre.appendChild(gif);
    }
}