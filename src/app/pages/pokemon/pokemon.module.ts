import { CardsModule } from './../cards/cards.module';

import { MaterialModule } from './../../material/material.module';
import { PokemonComponent } from './pokemon.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardListComponent } from './card-list/card-list.component';



@NgModule({
  declarations: [PokemonComponent, CardListComponent],
  imports: [
    CommonModule,
    MaterialModule,
    CardsModule
  ],
  exports: [PokemonComponent]
})
export class PokemonModule { }
