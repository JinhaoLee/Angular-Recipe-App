import { Recipe } from './../../models/recipe.model';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterPipe'
})
export class FilterPipePipe implements PipeTransform {
  transform(recipes: Recipe[], searchTerm: string): any {
    if (!recipes) {
      return [];
    }
    if (!searchTerm) {
      return recipes;
    }
    searchTerm = searchTerm.toLowerCase();
    return recipes.filter(recipe => recipe.description.toLowerCase().includes(searchTerm));
  }
}
