import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CargarPeliComponent } from './components/cargar-peli/cargar-peli.component';
import { PeliculaService } from './services/pelicula.service';
import { HomeComponent } from './components/home/home.component';
import { HttpClientModule, HttpClientJsonpModule } from '@angular/common/http';
import { AuthService } from './services/auth0.service';
import { NavbarComponent } from './components/navbar/navbar.component';
import { RouterModule, Routes } from '@angular/router';
import { DetalleComponent } from './components/detalle/detalle.component';
import { HomePersonajesComponent } from './components/personajes/home/home-personajes/home-personajes.component';
import { DetallePersonajeComponent } from './components/personajes/detalle-personaje/detalle-personaje.component';
import { CargarPersonajeComponent } from './components/personajes/cargar-personaje/cargar-personaje.component';
import { FooterComponent } from './components/footer/footer.component';



@NgModule({
  declarations: [
    AppComponent,
    CargarPeliComponent,
    HomeComponent,
    NavbarComponent,
    FooterComponent,
    DetalleComponent,
    CargarPersonajeComponent,
    HomePersonajesComponent,
    DetallePersonajeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    HttpClientJsonpModule,
    RouterModule
  ],
  providers: [PeliculaService,
  AuthService],
  bootstrap: [AppComponent],
  exports: [HttpClientModule]

})
export class AppModule { }
