import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,  Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { PeliculaService } from 'src/app/services/pelicula.service';
import { Form } from '@angular/forms';
import { Pelicula } from 'src/app/clases/pelicula';
import { AuthService } from 'src/app/services/auth0.service';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.css']
})
export class DetalleComponent implements OnInit {

  Pelicula: [];
  peli: Pelicula;

  constructor(private rutaActiva: ActivatedRoute, private http: HttpClient, private peliculasService: PeliculaService, 
    private router: Router, private auth: AuthService) { }

  ngOnInit() {
    this.getPelicula();
  }

  getPelicula() {
    const id = this.rutaActiva.snapshot.params.id;
    this.peliculasService.getPelicula(id).subscribe(res => {
      this.peliculasService.pelicula = res as [];
      console.log(res as []);
    });

  }

  updatePeli() {
    const pelicula = this.peliculasService.pelicula;
    this.peliculasService.putPelicula(pelicula).subscribe( res => {
      console.log('PUT correcto');
    });
  }

  eliminarPeli() {
    const pelicula = this.peliculasService.pelicula;
    this.peliculasService.deletePelicula(pelicula).subscribe( res => {
      this.router.navigate(['/']);
      console.log('Eliminado con éxito');
    });
  }
}



