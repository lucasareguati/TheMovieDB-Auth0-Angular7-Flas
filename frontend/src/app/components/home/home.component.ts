import { Component, OnInit } from '@angular/core';
import { PeliculaService } from 'src/app/services/pelicula.service';
import { MoviedbService } from 'src/app/services/moviedb.service';
import { Pelicula } from '../../clases/pelicula';
import { AuthService } from '../../services/auth0.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {
  nuevasPeliculas: [];
  peliculaBuscada: string;
  // peli: Pelicula;

  constructor(private auth: AuthService, private peliculaService: PeliculaService, private moviedbService: MoviedbService) {
    this.auth.handleAuthentication();
   }

  ngOnInit() {
    this.getPeliculas();
    console.log(this.auth.isAuthenticated());
  }

  Buscar() {
    this.moviedbService.getBusquedaPeliculas(this.peliculaBuscada).subscribe((data: any) => {
      console.log(data);
      const peli = new Pelicula(data[0]._id, data[0].title, data[0].overview, data[0].release_date,
                'https://image.tmdb.org/t/p/w600_and_h900_bestv2' + data[0].poster_path);
      this.peliculaService.postPelicula(peli).subscribe();
      console.log(peli);
    });
  }

  getMoviesFromAPI() {
    this.moviedbService.getDiscoverMovies().subscribe((data: any) => {
      this.nuevasPeliculas = data;
    });
  }

  getPeliculas() {
    this.peliculaService.getPeliculas().subscribe(res => {
      this.peliculaService.peliculas = res as [];
      console.log(res);
    });
  }
}
