const botonTema = document.getElementById('themeToggle')

//Recuperar tema claro
const temaGuardado = localStorage.getItem("tema");

if(temaGuardado === 'oscuro') {
    document.body.classList.add('dark-mode');
    botonTema.textContent =  "☀️ Modo claro";
}


// Cambiar el tema al presionar boton
botonTema.addEventListener('click',function() {
    document.body.classList.toggle('dark-mode');

    if (document.body.classList.contains('dark-mode')){
        botonTema.textContent = "☀️ Modo claro";
        localStorage.setItem('tema','oscuro');
    } else {
        botonTema.textContent = "🌙 Modo oscuro";
        localStorage.setItem('tema', 'claro');
    }
});
