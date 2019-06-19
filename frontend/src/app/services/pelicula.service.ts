import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Pelicula } from '../clases/pelicula';
import { catchError } from 'rxjs/operators';



@Injectable({
  providedIn: 'root'
})
export class PeliculaService {
  readonly API_URL = 'http://localhost:5000/peliculas';
  peliculas: [];
  pelicula: {};

  constructor(private http: HttpClient) { }

  getPelicula(id) {
    return this.http.get(this.API_URL + '/' + id);
  }

  getPeliculas() {
    return this.http.get(this.API_URL);
  }

  postPelicula(pelicula: Pelicula) {
    return this.http.post(this.API_URL, pelicula);
  }

  putPelicula(pelicula) {
    return this.http.put(this.API_URL + '/' + pelicula._id.$oid, pelicula);
  }

  deletePelicula(pelicula) {
    console.log(pelicula._id.$oid);
    return this.http.delete(this.API_URL + '/' + pelicula._id.$oid).pipe();
  }

}
