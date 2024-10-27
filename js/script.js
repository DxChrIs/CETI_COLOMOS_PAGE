/*
* INTENTO DE API GOOGLE MAPS

async function initMap(){
    const location = {lat: 20.703009180696625, lng: -103.38923722283465 };
    const map = new google.maps.Map(document.getElementById("map"), {
        zoom: 17,
        center: location,
    });

    new google.maps.Marker({
        position: location,
        map: map,
        title: "Centro de Enseñanza Técnica Industrial Plantel Colomos"
    });

    console.log("Mapa Inicializado...");
}

window.initMap = initMap;*/

/*
 * CAMBIAR IDIOMA
 * Agregar las rutas de cada una de las carpetas que tienen
 * para de esta manera, poder hacer el cambio de idioma
 *
 */
const rutas = {
    index: {
        es: "/index/es.html",
        en: "/index/en.html",
    },
    "historia-vision-mision": {
        es: "/historia-vision-mision/es.html",
        en: "/historia-vision-mision/en.html",
    },
    tramitesescolares: {
        es: "/tramitesescolares/es.html",
        en: "/tramitesescolares/en.html",
    },
    formatos: {
        es: "/formatos/es.html",
        en: "/formatos/en.html",
    },
};

function cambiarPagina(pagina, idioma) {
    if (rutas[pagina] && rutas[pagina][idioma]) {
        window.location.href = rutas[pagina][idioma];
    } else {
        console.error("La pagina o el idioma no estan disponibles.");
    }
}

document.addEventListener("DOMContentLoaded", () => {
    /*
     * Se crean dos variables de cada pagina
     * una variable es para español y la otra para ingles
     */
    const cmdIndexEspaniol = document.getElementById("espaniol");
    const cmdIndexIngles = document.getElementById("ingles");
    const cmdHistoriaEspaniol = document.getElementById("historia_espaniol");
    const cmdHistoriaIngles = document.getElementById("historia_ingles");
    const cmdTramitesEspaniol = document.getElementById("TramEsEs");
    const cmdTramitesIngles = document.getElementById("TramEsEn");
    const cmdFormatosEspaniol = document.getElementById("formatos_espaniol");
    const cmdFormatosIngles = document.getElementById("formatos_ingles");

    // Cambiar idioma en la página principal
    if (cmdIndexEspaniol) {
        cmdIndexEspaniol.addEventListener("click", () =>
            cambiarPagina("index", "es")
        );
    }
    if (cmdIndexIngles) {
        cmdIndexIngles.addEventListener("click", () =>
            cambiarPagina("index", "en")
        );
    }
    // Cambiar idioma en la página de historia
    if (cmdHistoriaEspaniol) {
        cmdHistoriaEspaniol.addEventListener("click", () =>
            cambiarPagina("historia-vision-mision", "es")
        );
    }
    if (cmdHistoriaIngles) {
        cmdHistoriaIngles.addEventListener("click", () =>
            cambiarPagina("historia-vision-mision", "en")
        );
    }
    if (cmdTramitesEspaniol) {
        cmdTramitesEspaniol.addEventListener("click", () =>
            cambiarPagina("tramitesescolares", "es")
        );
    }
    if (cmdTramitesIngles) {
        cmdTramitesIngles.addEventListener("click", () =>
            cambiarPagina("tramitesescolares", "en")
        );
    }
    if (cmdFormatosEspaniol) {
        cmdFormatosEspaniol.addEventListener("click", () =>
            cambiarPagina("formatos", "es")
        );
    }
    if (cmdFormatosIngles) {
        cmdFormatosIngles.addEventListener("click", () =>
            cambiarPagina("formatos", "en")
        );
    }
});
