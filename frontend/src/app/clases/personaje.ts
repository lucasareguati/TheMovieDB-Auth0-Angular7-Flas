export class Personaje {
    constructor(
        // id: string,
        nombre: string,
        biografia: string,
        imagen: string,
        sinopsis: string,
        peliculas: []
    ) {
        // this.id = id;
        this.nombre = nombre;
        this.biografia = biografia;
        this.sinopsis = sinopsis;
        this.imagen = imagen;
        this.peliculas = peliculas;
    }
    // id: string;
    nombre: string;
    biografia: string;
    sinopsis: string;
    imagen: string;
    peliculas: [];
}
