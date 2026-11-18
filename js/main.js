// ===== MENÚ MÓVIL =====
const botonMenu = document.querySelector('.menu-toggle');
const menu = document.querySelector('#menu');

botonMenu.addEventListener('click', () => {
  const estaAbierto = menu.classList.toggle('abierto');
  botonMenu.setAttribute('aria-expanded', estaAbierto);
});

// Cerrar el menú al pulsar un enlace
menu.querySelectorAll('a').forEach((enlace) => {
  enlace.addEventListener('click', () => {
    menu.classList.remove('abierto');
    botonMenu.setAttribute('aria-expanded', false);
  });
});

// ===== ANIMACIONES AL HACER SCROLL =====
const secciones = document.querySelectorAll('section');

const observador = new IntersectionObserver((entradas) => {
  entradas.forEach((entrada) => {
    if (entrada.isIntersecting) {
      entrada.target.classList.add('visible');
      observador.unobserve(entrada.target);
    }
  });
}, { threshold: 0.15 });

secciones.forEach((seccion) => {
  seccion.classList.add('oculto');
  observador.observe(seccion);
});

// ===== AÑO DEL FOOTER =====
document.querySelector('#anio').textContent = new Date().getFullYear();