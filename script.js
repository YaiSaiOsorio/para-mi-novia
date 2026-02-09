// ===============================
// MUSICA
// ===============================
const musica = document.getElementById("musica");
let musicaIniciada = false;

// ===============================
// PORTADA
// ===============================
const portada = document.getElementById("portada");

// Evitar selección de texto en la portada
if (portada) {
    portada.style.userSelect = "none";
    portada.style.cursor = "pointer";

    portada.addEventListener("click", () => {
        // Iniciar música
        if (!musicaIniciada && musica) {
            musica.volume = 0.2;
            musica.play().catch(() => {});
            musicaIniciada = true;
        }

        // Animación de salida
        portada.style.opacity = "0";

        setTimeout(() => {
            portada.style.display = "none";
        }, 1000);
    });
}

// ===============================
// VISOR DE FOTOS
// ===============================
const fotos = document.querySelectorAll(".foto");
const visor = document.getElementById("visor");
const visorImg = document.getElementById("visor-img");
const visorTexto = document.getElementById("visor-texto");

fotos.forEach(foto => {
    foto.addEventListener("click", () => {

        // Iniciar música si aún no ha iniciado
        if (!musicaIniciada && musica) {
            musica.volume = 0.2;
            musica.play().catch(() => {});
            musicaIniciada = true;
        }

        // Mostrar visor
        visorImg.src = foto.querySelector("img").src;
        visorTexto.textContent = foto.dataset.texto;
        visor.classList.add("activo");
    });
});

// Cerrar visor al hacer clic fuera
if (visor) {
    visor.addEventListener("click", () => {
        visor.classList.remove("activo");
    });
}
