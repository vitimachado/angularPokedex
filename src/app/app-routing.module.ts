import { CardsComponent } from './pages/cards/cards.component';
import { AuthGuard } from './auth.guard';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  
//  { path: '', component: CardsComponent },//, canActivate: [AuthGuard] },
  { path: '', loadChildren: () => import('./pages/cards/cards.module').then(m => m.CardsModule) },//, canActivate: [AuthGuard] },
  { path: 'cards/:id', loadChildren: () => import('./pages/pokemon/pokemon.module').then(m => m.PokemonModule) }
/*   { path: 'cursos', component: CursosComponent, canActivate: [AuthGuard] },
  { path: 'curso/:id', component: CursoDetalheComponent, canActivate: [AuthGuard] },
  { path: 'login', component: LoginComponent } */
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
