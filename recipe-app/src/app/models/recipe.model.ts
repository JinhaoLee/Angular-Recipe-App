import { Category } from './category.model';
import { Ingredient } from './ingredient.model';
import { Notes } from './notes.model';
import { Difficulty } from './difficulty.model';

export class Recipe {
  public id: string;
  public name: string;
  public description: string;
  public prepTime: number;
  public cookTime: number;
  public servings: number;
  public source: string;
  public url: string;
  public difficulty: Difficulty;
  public categories: Category[];
  public ingredients: Ingredient[];
  public notes: Notes;
  public image: string;
}
