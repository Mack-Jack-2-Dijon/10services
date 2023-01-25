import { Injectable } from '@angular/core';
import { Cocktail } from './models/cocktail.model';


@Injectable({
  providedIn: 'root'
})
export class CocktailService {

  constructor() { }

  cocktails : Cocktail[]=[
    {name: "MOMO", price : 8, image: "https://media.tenor.com/hSUfX2aE_RcAAAAC/dog-coctel.gif"},
    {name: "Vigin MoMo", price : 70, image: "https://media.tenor.com/_9Clnec7cwgAAAAC/cocktails-old-fashioned.gif"},
    {name: "culotte de grand mère", price : 10, image: "https://media.tenor.com/RNQzRuWmXMEAAAAC/cocktails-drinks.gif"}
  ];

  getCocktails () : Cocktail[] {
    return this.cocktails;
  }
}
