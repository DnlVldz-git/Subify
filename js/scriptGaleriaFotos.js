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
var foto5 = new foto();
foto5.ruta = "https://static3-sevilla.abc.es/media/tecnologia/2020/09/10/s/trucos-amazon-primevideo-ksrD--620x349@abc.png";
foto5.alt = "foto_amazonP";
foto5.descripcion = "Contamos con una variedad de servicios";


let arrFotos = [foto0, foto1, foto2, foto3, foto4, foto5];

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