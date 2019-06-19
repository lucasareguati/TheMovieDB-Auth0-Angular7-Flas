import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CargarPeliComponent } from './components/cargar-peli/cargar-peli.component';
import { HomeComponent } from './components/home/home.component';
import { AuthGuard } from './services/auth.guard';
import { DetalleComponent } from './components/detalle/detalle.component';
import { HomePersonajesComponent } from './components/personajes/home/home-personajes/home-personajes.component';
import { DetallePersonajeComponent } from './components/personajes/detalle-personaje/detalle-personaje.component';
import { CargarPersonajeComponent } from './components/personajes/cargar-personaje/cargar-personaje.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'detalle/:id', component: DetalleComponent},
  {path: 'personajes', component: HomePersonajesComponent},
  {path: 'personajes/cargar', component: CargarPersonajeComponent},
  {path: 'personajes/:id', component: DetallePersonajeComponent},
  {path: 'cargar', component: CargarPeliComponent, canActivate: [AuthGuard]},
  {path: '**', redirectTo: ''}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
