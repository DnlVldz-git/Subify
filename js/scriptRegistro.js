function usuario(){
    var nombre;
    var usuario;
    var contra;
    var mail;
    var fecha;
}

var usuarios = [];

function registro(){
    var user = document.getElementById("usuario");
    var psw = document.getElementById("psw");
    var nombre = document.getElementById("nombre");
    var mail = document.getElementById("email");
    var fecha = document.getElementById("fecha"),value;    

    if(user.value == "" || psw.value == "" || nombre.value == "" || mail.value == "" || !fecha){
        alert("Llene todos los campos");
    }else{
        var us = new usuario();
        us.nombre = nombre.value;
        us.usuario = user.value;
        us.contra = psw.value;
        us.mail = mail.value;
        us.fecha = fecha;

        usuarios.push(us);

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