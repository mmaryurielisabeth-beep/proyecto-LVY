// ============================
// ESTRELLAS
// ============================

const estrellas = document.getElementById("estrellas");

for (let i = 0; i < 120; i++) {

    const estrella = document.createElement("div");

    estrella.className = "estrella";

    estrella.style.left =
        Math.random() * 100 + "%";

    estrella.style.top =
        Math.random() * 100 + "%";

    estrella.style.animationDelay =
        Math.random() * 2 + "s";

    estrellas.appendChild(estrella);
}


// ============================
// CORAZONES
// ============================

const corazones =
    document.getElementById("corazones");

function crearCorazon() {

    const corazon =
        document.createElement("div");

    corazon.className = "corazon";

    corazon.textContent =
        Math.random() > 0.5
        ? "♥"
        : "♡";

    corazon.style.left =
        Math.random() * 100 + "vw";

    corazon.style.fontSize =
        (12 + Math.random() * 20) + "px";

    corazon.style.animationDuration =
        (5 + Math.random() * 5) + "s";

    corazones.appendChild(corazon);

    setTimeout(() => {

        corazon.remove();

    }, 11000);
}

setInterval(crearCorazon, 450);


// ============================
// TEXTO ANIMADO
// ============================

const texto =
    document.getElementById("texto");

const mensaje =
    "Mamá Ana, gracias por estar siempre conmigo. Te quiero muchísimo. 💙🩷";

let posicion = 0;

function escribir() {

    if (posicion < mensaje.length) {

        texto.textContent +=
            mensaje.charAt(posicion);

        posicion++;

        setTimeout(escribir, 60);
    }
}

escribir();


// ============================
// ABRIR SORPRESA
// ============================

function abrirSorpresa() {

    const sorpresa =
        document.getElementById("sorpresa");

    const musica =
        document.getElementById("musica");

    sorpresa.classList.add("mostrar");

   musica.currentTime = 0;
musica.loop = true;
musica.play();
}


// ============================
// CERRAR SORPRESA
// ============================

function cerrarSorpresa() {

    const sorpresa =
        document.getElementById("sorpresa");

    sorpresa.classList.remove("mostrar");
}


// ============================
// CERRAR TOCANDO AFUERA
// ============================

const ventana =
    document.getElementById("sorpresa");

ventana.addEventListener("click", function(event) {

    if (event.target === ventana) {

        cerrarSorpresa();
    }

});