import { Component, OnInit } from '@angular/core';
import { PersonajesService } from 'src/app/services/personajes.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-cargar-personaje',
  templateUrl: './cargar-personaje.component.html',
  styleUrls: ['./cargar-personaje.component.css']
})
export class CargarPersonajeComponent implements OnInit {

  constructor(private personajeService: PersonajesService, private router: Router) { }
  ngOnInit() {
  }

  postPersonaje(form: NgForm) {
    console.log(form.value.imagen);
    form.value.peliculas = form.value.peliculas.split(',');
    this.personajeService.postPersonaje(form.value).subscribe(res => {
      this.router.navigate(['/personajes']);
      console.log(form.value);
    }); 
  }
}




