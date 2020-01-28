import { PokemonComponent } from './../pokemon/pokemon.component';
import { Routes, RouterModule } from '@angular/router';
import { CardsComponent } from './cards.component';
import { NgModule } from '@angular/core';

const routes: Routes = [
  { path: '', component: CardsComponent},
  { path: 'cards/:id', component: PokemonComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CardsRoutingModule { }
