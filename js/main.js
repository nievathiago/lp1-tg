
// MODO OSCURO 

const botonTema = document.getElementById("themeToggle");

botonTema.addEventListener("click", function () {

    // Activar o desactivar modo oscuro
    document.body.classList.toggle("dark-mode");

    // Cambiar el texto del botón
    if (document.body.classList.contains("dark-mode")) {
        botonTema.textContent = "☀️ Modo claro";
    } else {
        botonTema.textContent = "🌙 Modo oscuro";
    }

});

