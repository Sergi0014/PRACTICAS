document.addEventListener('DOMContentLoaded', function() {
    
    var button = document.getElementById('miBoton');
    button.addEventListener('click', cambiarContenido);
        

    });

    function cambiarContenido() {
        var parrafo = document.getElementById('Parrafo');
        parrafo.innerHTML = 'El contenido ha sido cambiado';
        parrafo.style.color = 'blue';
    }