document.addEventListener("DOMContentLoaded", () => {
    const galeria = new Galeria(7); // Crear una galería con 5 imágenes

    const imagenDiv = document.getElementById("imagen");
    const btnPrimera = document.getElementById("primera");
    const btnAnterior = document.getElementById("anterior");
    const btnSiguiente = document.getElementById("siguiente");
    const btnUltima = document.getElementById("ultima");

    const mostrarImagen = (rutaImagen) => {
        imagenDiv.style.backgroundImage = `url(${rutaImagen})`;
    }

    btnPrimera.addEventListener("click", (e) => {
        e.preventDefault();
        mostrarImagen(galeria.imagenPrimera());
    });

    btnAnterior.addEventListener("click", (e) => {
        e.preventDefault();
        mostrarImagen(galeria.imagenAnterior());
    });

    btnSiguiente.addEventListener("click", (e) => {
        e.preventDefault();
        mostrarImagen(galeria.imagenSiguiente());
    });

    btnUltima.addEventListener("click", (e) => {
        e.preventDefault();
        mostrarImagen(galeria.imagenUltima());
    });

    // Mostrar la primera imagen al cargar la página
    mostrarImagen(galeria.imagenPrimera());
});

