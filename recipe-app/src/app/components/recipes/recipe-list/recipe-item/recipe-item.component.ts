import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from '../../../../models/recipe.model';
import { RecipeService } from 'src/app/services/recipe.service';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.scss']
})
export class RecipeItemComponent implements OnInit {
  @Input() recipe: Recipe;
  @Input() index: number;
  recipeShow = false;
  ingredientShow = false;

  constructor(private recipeServe: RecipeService) {}

  ngOnInit() {}

  onIngredientsToggle() {
    this.ingredientShow = !this.ingredientShow;
  }

  onRecipeToggle() {
    this.recipeShow = !this.recipeShow;
  }

  onRecipeDelete() {
    this.recipeServe.removeRecipe(this.recipe.id);
  }
}
