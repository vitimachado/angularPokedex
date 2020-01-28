import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-card-pokemon',
  templateUrl: './card-pokemon.component.html',
  styleUrls: ['./card-pokemon.component.css']
})
export class CardPokemonComponent implements OnInit {

  @Input() card;
  @Input() bnt;
  
  constructor() { }

  ngOnInit() {
    console.log("card", this.card);
  }

}
