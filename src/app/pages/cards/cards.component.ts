import { CardsService } from './../../services/cards/cards.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {

  display: any;
  cards: any;
  cardsOriginal: any;
  cardsServiceSubscribe: any;
  mymodel: string;

  constructor(private cardsService: CardsService) { }

  ngOnInit() {
    this.getAllCards();
  }

  public getAllCards() {

    //this.loadingService.setLoading(true);

    this.cardsServiceSubscribe = this.cardsService.getAllPokemons().then( 
      cards => {        
        

        cards.sort((a,b) => a.name.localeCompare(b.name));
        console.log("getAllPokemons cards", cards); 
        this.cardsOriginal = cards;
        this.cards = cards;

        //this.loadingService.setLoading(false);

      },
      erro => {
        //this.msgNoTable = this.msgErroGetTable;
        //this.loadingService.setLoading(false);
      }
    )    
  }

  valuechange(newValue) {
    this.mymodel = newValue;
    console.log(newValue)
    

    this.cards = this.cardsOriginal.filter(x=>x.name.indexOf(newValue)>=0);
    if(this.cards.length == 0) this.cards = this.cardsOriginal;
  }
}
