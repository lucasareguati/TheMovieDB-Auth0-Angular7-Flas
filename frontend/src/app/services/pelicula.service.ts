import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Pelicula } from '../clases/pelicula';



@Injectable({
  providedIn: 'root'
})
export class PeliculaService {
  readonly API_URL = 'http://localhost:5000/peliculas';
  peliculas: [];

  constructor(private http: HttpClient) { }



  getPeliculas() {
    return this.http.get(this.API_URL);
  }

  postPelicula(pelicula: Pelicula) {
    return this.http.post(this.API_URL, pelicula);
  }

}
