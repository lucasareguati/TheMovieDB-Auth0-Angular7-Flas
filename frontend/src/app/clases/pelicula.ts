export class Pelicula {
    constructor(
        titulo: string,
        sinopsis: string,
        fechaLanzamiento: string,
        rutaPoster: string
    ) {
        this.titulo = titulo;
        this.sinopsis = sinopsis;
        this.fechaLanzamiento = fechaLanzamiento;
        this.rutaPoster = rutaPoster;
    }
    titulo: string;
    sinopsis: string;
    fechaLanzamiento: string;
    rutaPoster: string;
}
