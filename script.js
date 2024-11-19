const buscar = document.getElementById('buscar');
const productos = document.querySelectorAll('.producto');
const reloj = document.getElementById('reloj');

buscar.addEventListener('keyup', function() {
    const texto = buscar.value.toLowerCase();
    productos.forEach(function(producto) {
        const nombre = producto.querySelector('p').textContent.toLowerCase();
        if (nombre.includes(texto)) {
            producto.style.display = 'block';
        } else {
            producto.style.display = 'none';
        }
    });
});

function actualizarReloj() {
    const fecha = new Date();
    const horas = fecha.getHours().toString().padStart(2, '0');
    const minutos = fecha.getMinutes().toString().padStart(2, '0');
    const segundos = fecha.getSeconds().toString().padStart(2, '0');
    reloj.textContent = `${horas}:${minutos}:${segundos}`;
}

// Actualizar el reloj cada segundo
setInterval(actualizarReloj, 1000);

        // Selección de elementos
const toggleMenu = document.querySelector('.menu-toggle');
const menu = document.querySelector('.menu');

// Evento para mostrar/ocultar el menú
toggleMenu.addEventListener('click', () => {
  menu.classList.toggle('show');
});
