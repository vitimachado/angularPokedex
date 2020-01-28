import { Card } from './../../models/card.model';
import { Observable, throwError } from "rxjs";
import { map, catchError, flatMap } from "rxjs/operators";
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CardsService {

  private apiCards: string = "https://api.pokemontcg.io/v1/cards";

  constructor(private http: HttpClient) { }

  getAllCards() {
    //return this.http.get(this.apiCards).toPromise().then(data => { return this.jsonDataToCard(data);}).catch(this.handleError);

    return this.http.get(this.apiCards).pipe(
      catchError(this.handleError),
      map(data => this.jsonDataToCard(data))
    ).toPromise();
  }

  getAllPokemons() {
    //return this.http.get(this.apiCards).toPromise().then(data => { return this.jsonDataToCard(data);}).catch(this.handleError);

    return this.http.get(this.apiCards).pipe(
      catchError(this.handleError),
      map(this.jsonDataToPokemon)
    ).toPromise();
  }

  getPokemon(id) {    
    return this.http.get(this.apiCards+`/${id}`).pipe(
      catchError(this.handleError),
      map(this.jsonDataToCard)
    ).toPromise();
  }

  private jsonDataToCard(jsonData: any): Card  {

    console.log('integracao.service jsonDataToIntegracao', jsonData);

    return jsonData as Card;[]
  }
  
  private jsonDataToPokemon(jsonData: any[]): any{
    const pokemons = [];

    console.log("jsonDataToPokemon jsonData", jsonData)
    //if(jsonData && jsonData.length) 
    jsonData['cards'].forEach(element => {
      
      console.log("jsonDataToPokemon", element)
      if(element.nationalPokedexNumber) pokemons.push(element);
    });
    return pokemons;
  }

  private handleError(error: any): Observable<any>{
    console.log("ERRO NA SOLICITAÇÃO => ", error);
    return throwError(error);
  }
}
