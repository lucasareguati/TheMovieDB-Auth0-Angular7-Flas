import { Component, OnInit } from '@angular/core';
import { PersonajesService } from 'src/app/services/personajes.service';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth0.service';
import { NgForm } from '@angular/forms';
import { format } from 'url';

@Component({
  selector: 'app-detalle-personaje',
  templateUrl: './detalle-personaje.component.html',
  styleUrls: ['./detalle-personaje.component.css']
})
export class DetallePersonajeComponent implements OnInit {

  constructor(private personajeService: PersonajesService, private rutaActiva: ActivatedRoute, private auth: AuthService, 
              private router: Router) { }

  ngOnInit() {
    this.getPersonaje();
  }

  getPersonaje() {
    const id = this.rutaActiva.snapshot.params.id;
    this.personajeService.getPersonaje(id).subscribe( res => {
      this.personajeService.personaje = res as [];
      console.log(this.personajeService.personaje['peliculas']);
    });
  }

  putPersonaje(form: NgForm) {
    form.value.peliculas = form.value.peliculas.split(',');
    const id = this.rutaActiva.snapshot.params.id;
    this.personajeService.putPersonaje(id, form.value).subscribe(res => {
      console.log('Actualizado con exito');
    }); // Problema al editar pelicuas .split(",")
  }

  deletePersonaje() {
    const id = this.rutaActiva.snapshot.params.id;
    this.personajeService.deletePersonaje(id).subscribe(res => {
      this.router.navigate(['/personajes']);
      console.log(id + ' Eliminado con éxito');
    });
  }

}
