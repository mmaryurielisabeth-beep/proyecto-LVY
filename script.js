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

// Abrir y cerrar el regalo sorpresa
const botonRegalo = document.getElementById("botonRegalo");
const mensajeRegalo = document.getElementById("mensajeRegalo");
const cerrarRegalo = document.getElementById("cerrarRegalo");

if (botonRegalo && mensajeRegalo && cerrarRegalo) {
  botonRegalo.addEventListener("click", () => {
    mensajeRegalo.hidden = false;
    botonRegalo.setAttribute("aria-expanded", "true");
    botonRegalo.querySelector(".texto-boton-regalo").textContent =
      "💖 ¡Sorpresa para mamá!";
  });

  cerrarRegalo.addEventListener("click", () => {
    mensajeRegalo.hidden = true;
    botonRegalo.setAttribute("aria-expanded", "false");
    botonRegalo.querySelector(".texto-boton-regalo").textContent =
      "🎁 Abrir mi sorpresa";
  });
}

/* ACTIVAR LA MÚSICA AL TOCAR LA PÁGINA */
document.addEventListener("DOMContentLoaded", function () {
  const musica = document.getElementById("musica");

  if (!musica) return;

  musica.loop = true;
  musica.volume = 0.7;

  function iniciarMusica() {
    musica.play().then(function () {
      document.removeEventListener("click", iniciarMusica);
      document.removeEventListener("touchstart", iniciarMusica);
    }).catch(function (error) {
      console.log("Toca la pantalla para iniciar la música.");
    });
  }

  document.addEventListener("click", iniciarMusica);
  document.addEventListener("touchstart", iniciarMusica);
});

/* ==========================================
   FUNCIONES NUEVAS PARA LA SORPRESA DE ANA
========================================== */

function iniciarNuevasSorpresasAna() {
 
 // CARTAS SECRETAS, UNA POR UNA
const cartas = [
  {
    icono: "💗",
    nombre: "Abre mi corazón",
    titulo: "Para mi mamá Ana",
    mensaje: "Mamá, eres una persona muy especial para mí. Tu amor hace que hasta los días difíciles sean más bonitos. Gracias por formar parte de mi vida."
  },
  {
    icono: "🌷",
    nombre: "Gracias, mamá",
    titulo: "Un gracias de corazón",
    mensaje: "Gracias por cuidarme, preocuparte por mí y darme tu cariño. Tal vez no siempre encuentre las palabras para decírtelo, pero valoro muchísimo todo lo que haces."
  },
  {
    icono: "✨",
    nombre: "Mi deseo para ti",
    titulo: "Un deseo para ti",
    mensaje: "Deseo que nunca te falten motivos para sonreír, que tus sueños se hagan realidad y que siempre recuerdes cuánto te quiero. Mereces toda la felicidad del universo."
  }
];

const seccionCartas = document.getElementById("cartasSecretas");
const abrirCarta = document.getElementById("abrirCarta");
const iconoCarta = document.getElementById("iconoCarta");
const nombreCarta = document.getElementById("nombreCarta");
const mensajeCarta = document.getElementById("mensajeCarta");
const tituloCarta = document.getElementById("tituloCarta");
const textoCarta = document.getElementById("textoCarta");
const siguienteCarta = document.getElementById("siguienteCarta");
const contadorCartas = document.getElementById("contadorCartas");

let numeroCarta = 0;

function mostrarCartaActual() {
  const carta = cartas[numeroCarta];

  iconoCarta.textContent = carta.icono;
  nombreCarta.textContent = carta.nombre;
  tituloCarta.textContent = carta.titulo;
  textoCarta.textContent = carta.mensaje;

  contadorCartas.textContent =
    "Cartita " + (numeroCarta + 1) + " de " + cartas.length;

  mensajeCarta.hidden = true;
  abrirCarta.hidden = false;

  siguienteCarta.textContent =
    numeroCarta === cartas.length - 1
      ? "Terminar cartas 💖"
      : "Leer siguiente 💌";
}

if (abrirCarta && mensajeCarta && siguienteCarta && seccionCartas) {
  abrirCarta.addEventListener("click", function () {
    mensajeCarta.hidden = false;
    abrirCarta.hidden = true;
  });

  siguienteCarta.addEventListener("click", function () {
    if (numeroCarta < cartas.length - 1) {
      numeroCarta++;
      mostrarCartaActual();
    } else {
      seccionCartas.hidden = true;
      document.body.classList.add("cartas-terminadas");

      const botonPetalos = document.getElementById("botonPetalos");
      if (botonPetalos) {
        botonPetalos.scrollIntoView({
          behavior: "smooth",
          block: "center"
        });
      }
    }
  });

  mostrarCartaActual();
}

  // 2. LLUVIA DE PÉTALOS
  const botonPetalos = document.getElementById("botonPetalos");
  let lluviaActiva = false;

  if (botonPetalos) {
    botonPetalos.addEventListener("click", function () {
      // Evita iniciar varias lluvias al mismo tiempo.
      if (lluviaActiva) return;

      lluviaActiva = true;

      const simbolos = ["🌸", "🌷", "💗", "✿", "💕"];
      let creados = 0;
      const totalPetalos = 45;

      const intervalo = setInterval(function () {
        const petalo = document.createElement("span");

        petalo.className = "petalo-volador";
        petalo.textContent =
          simbolos[Math.floor(Math.random() * simbolos.length)];

        petalo.style.left = Math.random() * 100 + "vw";
        petalo.style.fontSize = (16 + Math.random() * 20) + "px";
        petalo.style.animationDuration = (4 + Math.random() * 4) + "s";
        petalo.style.setProperty(
          "--desplazamiento",
          (Math.random() * 180 - 90) + "px"
        );

        document.body.appendChild(petalo);

        petalo.addEventListener("animationend", function () {
          petalo.remove();
        });

        // Respaldo para retirar el pétalo si la animación no termina.
        setTimeout(function () {
          if (petalo.isConnected) petalo.remove();
        }, 10000);

        creados++;

        if (creados >= totalPetalos) {
          clearInterval(intervalo);
          setTimeout(function () {
            lluviaActiva = false;
          }, 8000);
        }
      }, 100);
    });
  }

  // 3. SORPRESA FINAL AL ABRIR EL REGALO
  const botonRegalo = document.getElementById("botonRegalo");
  const sorpresaFinal = document.getElementById("sorpresaFinal");
  const cerrarSorpresaFinal =
    document.getElementById("cerrarSorpresaFinal");

  let temporizadorFinal = null;
  let sorpresaMostrada = false;

  if (botonRegalo && sorpresaFinal) {
    botonRegalo.addEventListener("click", function () {
      if (sorpresaMostrada) return;

      // Espera para que primero pueda verse el regalo original.
      clearTimeout(temporizadorFinal);

      temporizadorFinal = setTimeout(function () {
        sorpresaFinal.hidden = false;
        sorpresaMostrada = true;
      }, 8000);
    });
  }

  if (cerrarSorpresaFinal && sorpresaFinal) {
    cerrarSorpresaFinal.addEventListener("click", function () {
      sorpresaFinal.hidden = true;
    });
  }
}

// Funciona tanto si el documento ya cargó como si todavía está cargando.
if (document.readyState === "loading") {
  document.addEventListener(
    "DOMContentLoaded",
    iniciarNuevasSorpresasAna
  );
} else {
  iniciarNuevasSorpresasAna();
}

/* INICIO ORDENADO DE LA SORPRESA */
(function conectarInicioSorpresa() {
  function prepararInicio() {
    const inicio = document.getElementById("inicioSorpresa");
    const boton = document.getElementById("comenzarSorpresa");
    const cartas = document.getElementById("cartasSecretas");

    if (!inicio || !boton || !cartas) return;

    document.body.classList.remove(
      "sorpresa-iniciada",
      "cartas-terminadas"
    );

    inicio.hidden = false;
    cartas.hidden = true;

    boton.addEventListener("click", function () {
      inicio.hidden = true;
      cartas.hidden = false;
      document.body.classList.add("sorpresa-iniciada");

      cartas.scrollIntoView({
        behavior: "smooth",
        block: "center"
      });
    });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", prepararInicio);
  } else {
    prepararInicio();
  }
})();
