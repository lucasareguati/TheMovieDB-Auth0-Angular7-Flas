import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CargarPeliComponent } from './components/cargar-peli/cargar-peli.component';
import { HomeComponent } from './components/home/home.component';
import { AuthGuard } from './services/auth.guard';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'cargar', component: CargarPeliComponent, canActivate: [AuthGuard]},
  {path: '**', redirectTo: ''}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
