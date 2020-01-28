import { FormsModule } from '@angular/forms';
import { PokemonModule } from './../pokemon/pokemon.module';
import { CardsRoutingModule } from './cards-routing.module';
import { CardsComponent } from './cards.component';
import { TranslateModule } from '@ngx-translate/core';
import { MaterialModule } from './../../material/material.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardPokemonComponent } from './card-pokemon/card-pokemon.component';


@NgModule({
  declarations: [ CardsComponent, CardPokemonComponent ],
  imports: [
    CommonModule,
    MaterialModule,
    CardsRoutingModule,
    FormsModule
  ],
  exports: [ CardsComponent, CardPokemonComponent ]
})
export class CardsModule { }
