import { Injectable } from '@angular/core';
import { Recipe } from '../models/recipe.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {
  private BASE_URL = 'http://localhost:8080/api/v2/recipes';

  constructor(private http: HttpClient) {}

  public getRecipes(): Observable<Recipe[]> {
    return this.http
      .get<{ recipes: Recipe[] }>(this.BASE_URL)
      .pipe(map(response => response.recipes));
  }
}
