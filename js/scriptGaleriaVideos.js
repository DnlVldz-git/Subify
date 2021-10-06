function video(){
    var incrustacion;    
    var descripcion;
}

window.addEventListener('load', agregarVideos);

var video0 = new video();
video0.incrustacion = '<iframe width="90%" height="300px" src="https://www.youtube.com/embed/UuYkT_IYFyc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>';
video0.descripcion = "Siempre podrás cancelar";
var video1 = new video();
video1.incrustacion = '<iframe width="90%" height="300px" src="https://www.youtube.com/embed/iirChYyD7to" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>';
video1.descripcion = "Ahorra tiempo";
var video2 = new video();
video2.incrustacion = '<iframe width="90%" height="300px" src="https://www.youtube.com/embed/Q_ViE3v_KBI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>';
video2.descripcion = "Conoce a detalle tus suscripciones";
var video3 = new video();
video3.incrustacion = '<iframe width="90%" height="300px" src="https://www.youtube.com/embed/p_uE_bExJJA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>';
video3.descripcion = "Nunca te pierdas un evento";

let arrVideos = [video0, video1, video2, video3];

function agregarVideos(){
    const nodoPadre = document.getElementById("contenedor_multimedia");	
    while (nodoPadre.firstChild) {
        nodoPadre.removeChild(nodoPadre.firstChild);
    }

    var div = document.createElement('div');
    div.innerHTML = '';

    for (let i = 0; i < arrVideos.length; i++) {
        var div = document.createElement('div');        
        var p = document.createElement('p');
        
        div.innerHTML = arrVideos[i].incrustacion;
        p.innerHTML = arrVideos[i].descripcion;
        
        div.appendChild(p);

        nodoPadre.appendChild(div);
    }    
}