class Galeria {
    constructor(numImagenes) {
        this.imagenes = [];
        for (let i = 1; i <= numImagenes; i++) {
            this.imagenes.push(`imagenes/foto${i}.jpg`); // Generar nombres de imágenes
        }
        this.cursor = 0; // Índice de la imagen que se está mostrando actualmente
    }

    imagenAleatoria() {
        this.cursor = Math.floor(Math.random() * this.imagenes.length);
        return this.imagenes[this.cursor];
    }

    imagenUltima() {
        this.cursor = this.imagenes.length - 1;
        return this.imagenes[this.cursor];
    }

    imagenPrimera() {
        this.cursor = 0;
        return this.imagenes[this.cursor];
    }

    imagenAnterior() {
        this.cursor = (this.cursor - 1 + this.imagenes.length) % this.imagenes.length;
        return this.imagenes[this.cursor];
    }

    imagenSiguiente() {
        this.cursor = (this.cursor + 1) % this.imagenes.length;
        return this.imagenes[this.cursor];
    }
}
