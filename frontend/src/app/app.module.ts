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

@NgModule({
  declarations: [
    AppComponent,
    CargarPeliComponent,
    HomeComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    HttpClientJsonpModule
  ],
  providers: [PeliculaService,
  AuthService],
  bootstrap: [AppComponent],
  exports: [HttpClientModule]

})
export class AppModule { }
