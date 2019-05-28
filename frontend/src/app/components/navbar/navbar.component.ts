import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth0.service';
import { MoviedbService } from '../../services/moviedb.service';
import { Pelicula } from '../../clases/pelicula';
import { PeliculaService } from 'src/app/services/pelicula.service';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  peliculaBuscada: string;

  constructor(private peliculaService: PeliculaService, private auth: AuthService, private moviedbService: MoviedbService) { 
    auth.handleAuthentication();
  }

  ngOnInit() {
  }

  Buscar() {
    this.moviedbService.getBusquedaPeliculas(this.peliculaBuscada).subscribe((data: any) => {
      console.log(data);
      const peli = new Pelicula(data[0].title, data[0].overview, data[0].release_date,
                'https://image.tmdb.org/t/p/w600_and_h900_bestv2' + data[0].poster_path);
      this.peliculaService.postPelicula(peli).subscribe();
      console.log(peli);
    });
  }

}
