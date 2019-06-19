export class Pelicula {
    constructor(
        id: string,
        titulo: string,
        sinopsis: string,
        fechaLanzamiento: string,
        rutaPoster: string
    ) {
        this.id = id;
        this.titulo = titulo;
        this.sinopsis = sinopsis;
        this.fechaLanzamiento = fechaLanzamiento;
        this.rutaPoster = rutaPoster;
    }
    id: string;
    titulo: string;
    sinopsis: string;
    fechaLanzamiento: string;
    rutaPoster: string;
}
