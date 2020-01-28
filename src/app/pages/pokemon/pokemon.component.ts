import { CardsService } from './../../services/cards/cards.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.css']
})
export class PokemonComponent implements OnInit {

  cardsServiceSubscribe: any;
  rotaSubscribe: any;
  pokemon: any;

  constructor(    
    private route: ActivatedRoute, 
    private router: Router,
    private cardsService: CardsService
  ) { }

  ngOnInit() {
    
    this.rotaSubscribe = this.route.params.subscribe(
      (queryParams: any) => {
        console.log("queryParams", queryParams.id);
        this.getPokemon(queryParams.id);

      }, error => {

        console.log("error queryParams", error);        
        this.router.navigate(['/']);
      }
    )
  }

  

  public getPokemon(id) {

    //this.loadingService.setLoading(true);

    this.cardsServiceSubscribe = this.cardsService.getPokemon(id).then( 
      pokemon => {               

        console.log("getPokemon pokemon", pokemon); 
        this.pokemon = pokemon['card'];
        //this.loadingService.setLoading(false);

      },
      erro => {
        //this.msgNoTable = this.msgErroGetTable;
        //this.loadingService.setLoading(false);
      }
    )    
  }

  paginaPrincipal() {    
    this.router.navigate(['/']);
  }

}
