function foto(){
    var ruta ;
    var alt;
    var descripcion;
};

function video(){
    var incrustacion;    
    var descripcion;
}


var foto0 = new foto();
foto0.ruta = "https://estaticos-cdn.elperiodico.com/clip/ee0263dc-718e-41f4-b88c-70f3ae679110_alta-libre-aspect-ratio_default_0.jpg";
foto0.alt = "foto_netflix";
foto0.descripcion = "Disfruta tus series favoritas";
var foto1 = new foto();
foto1.ruta = "https://rock101online.mx/wp-content/uploads/2021/08/Spotify-Plus-1100x550.png";
foto1.alt = "foto_spoti";
foto1.descripcion = "Escucha la música que desees";
var foto2 = new foto();
foto2.ruta = "https://www.topcomparativas.com/wp-content/uploads/2018/12/video-amazon-prime-571x292.png";
foto2.alt = "foto_amazon";
foto2.descripcion = "Relájate y pon una película";
var foto3 = new foto();
foto3.ruta = "https://loshijosdeaztlan.files.wordpress.com/2018/01/cd85940e8285fe3b1107f81805cfa52c.jpg";
foto3.alt = "foto_hbo";
foto3.descripcion = "Sin preocuparte de fechas de pago";
var foto4 = new foto();
foto4.ruta = "https://cdn.businessinsider.es/sites/navi.axelspringer.es/public/styles/bi_1860/public/media/image/2020/03/familia-viendo-disney-plus-1885289.jpg?itok=B8Qsaavp";
foto4.alt = "foto_disney";
foto4.descripcion = "Nosotros nos encargamos de eso";

let arrFotos = [foto0, foto1, foto2, foto3, foto4];

window.addEventListener('load', agregarFotos);

function agregarFotos(){
    const nodoPadre = document.getElementById("contenedor_multimedia");	
    while (nodoPadre.firstChild) {
        nodoPadre.removeChild(nodoPadre.firstChild);
    }

    for (let i = 0; i < arrFotos.length; i++) {
        var div = document.createElement('div');
        var img = document.createElement('img');
        var p = document.createElement('p');

        img.src = arrFotos[i].ruta;
        img.alt = arrFotos[i].alt;
        p.innerHTML = arrFotos[i].descripcion;

        div.appendChild(img);
        div.appendChild(p);

        nodoPadre.appendChild(div);
    }
}

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