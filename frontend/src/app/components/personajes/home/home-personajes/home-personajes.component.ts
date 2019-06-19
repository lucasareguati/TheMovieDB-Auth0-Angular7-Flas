import { Component, OnInit } from '@angular/core';
import { PersonajesService } from 'src/app/services/personajes.service';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-home-personajes',
  templateUrl: './home-personajes.component.html',
  styleUrls: ['./home-personajes.component.css']
})
export class HomePersonajesComponent implements OnInit {

  personajes: Array<string> = [];
  peliBuscada: string;
  encontrado: Boolean = false;
  mostrar: Boolean = false;

  constructor(private personajeService: PersonajesService) { }

  ngOnInit() {
    this.getPersonajes();


  }

  Buscar(form: NgForm) {
    
    this.personajes = [];
    this.peliBuscada = this.personajeService.peliBuscada;
    console.log(this.peliBuscada);
    for (const personaje of this.personajeService.personajes) {
      for (const peli of personaje[1].peliculas) {
        console.log('Buscado: ' + this.peliBuscada, ' =? ' + peli);
        if (this.peliBuscada === peli) {
          console.log('COINCIDENCIA');
          this.personajes.push(personaje[1].nombre);
        }
      }
    }
    if (this.personajes.length > 0) {
      console.log(this.personajes);
      this.encontrado = true;
    } else {
      this.encontrado = false;
      this.mostrar = true;
      console.log('No se encontraron coincidencias');
    }
  }



  getPersonajes() {
    this.personajeService.getPersonajes().subscribe( res => {
      this.personajeService.personajes = res as [];
      console.log(this.personajeService.personajes);
    });
  }

  putPersonaje(personaje) {
    console.log(personaje);
  }

  ok() {
    this.mostrar = false;
  }


}