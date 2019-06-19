import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Personaje } from '../clases/personaje';


@Injectable({
  providedIn: 'root'
})
export class PersonajesService {
  readonly API_URL = 'http://localhost:5000/personajes';
  personajes: [];
  personaje: {};
  NuevoPersonaje: Personaje;
  peliBuscada: string;

  constructor(private http: HttpClient) { }

  getPersonajes() {
    return this.http.get(this.API_URL);
  }

  getPersonaje(id) {
    return this.http.get(this.API_URL + '/' + id );
  }

  putPersonaje(id, personaje) {
    return this.http.put(this.API_URL + '/' + id, personaje);
  }

  deletePersonaje(id) {
    return this.http.delete(this.API_URL + '/' + id);
  }

  postPersonaje(personaje) {
    return this.http.post(this.API_URL, personaje);
  }

}
