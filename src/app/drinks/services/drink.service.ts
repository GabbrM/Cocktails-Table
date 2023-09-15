import { Injectable } from '@angular/core';
import { Drink } from "../models/drink.model";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class DrinkService {

  private url_API = 'https://thecocktaildb.com/api/json/v1/1/search.php?f=a'
  constructor(private http:  HttpClient) { }

  getInformation() {
    return this.http.get<Drink>(this.url_API)
  }
}
