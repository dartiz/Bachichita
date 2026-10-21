document.getElementById('btn-empezar').addEventListener('click', function() {
    // 1. Ocultamos la pantalla negra del principio
    let pantallaInicio = document.getElementById('pantalla-inicio');
    pantallaInicio.style.display = 'none';
    
    // 2. Mostramos el contenido romántico
    let contenido = document.getElementById('contenido-principal');
    contenido.classList.remove('oculto');

    // 3. Verificamos si la música existe antes de reproducirla
    let musica = document.getElementById('musica-fondo');
    
    if (musica) { // Solo si la etiqueta de audio está en el HTML, intenta sonar
        musica.volume = 0.6; 
        let playPromise = musica.play();
        if (playPromise !== undefined) {
            playPromise.catch(error => {
                console.log("Música pausada esperando permisos.");
            });
        }
    } else {
        console.log("No se encontró la música, pero la página sigue funcionando.");
    }
});