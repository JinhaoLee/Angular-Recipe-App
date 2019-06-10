import { Category } from './category.model';
import { Ingredient } from './ingredients.model';
import { Notes } from './notes.model';

export class Recipe {
  public name: string;
  public description: string;
  public prepTime: number;
  public cookTime: number;
  public source: string;
  public servings: number;
  public difficulty: string;
  public categories: Category[];
  public ingredients: Ingredient[];
  public notes: Notes;
  public image: string;

  constructor(name: string, description: string) {
    this.name = name;
    this.description = description;
  }
}
