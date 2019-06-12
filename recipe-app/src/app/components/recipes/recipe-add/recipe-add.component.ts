import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormArray } from '@angular/forms';

import { Category } from './../../../models/category.model';
import { Difficulty } from './../../../models/difficulty.model';
import { RecipeService } from './../../../services/recipe.service';
import { UnitOfMeasure } from './../../../models/unitOfMeasure.model';

@Component({
  selector: 'app-recipe-add',
  templateUrl: './recipe-add.component.html',
  styleUrls: ['./recipe-add.component.scss']
})
export class RecipeAddComponent implements OnInit {
  recipeForm: FormGroup;
  categoryEnum = Category.categories;
  difficultyEnum = Difficulty.difficulties;
  unitOfMeasureEnum = UnitOfMeasure.unitOfMeasures;

  constructor(private fb: FormBuilder, private recipeService: RecipeService) {}

  ngOnInit() {
    this.createForm();
  }

  onChange(category: string, isChecked: boolean) {
    if (isChecked) {
      this.categories.push(this.fb.control(category));
    } else {
      const index = this.categories.controls.findIndex(control => control.value === category);
      this.categories.removeAt(index);
    }
  }

  onSubmit() {
    this.recipeService.addRecipe(this.recipeForm.value);
  }

  // categories
  get categories() {
    return this.recipeForm.get('categories') as FormArray;
  }

  addCategory() {
    return;
  }

  /**
   * get ingredients
   */
  get ingredients() {
    return this.recipeForm.get('ingredients') as FormArray;
  }

  /**
   * add ingredient
   */
  addIngredients() {
    this.ingredients.push(
      this.fb.group({
        description: [''],
        amount: [0],
        uom: [UnitOfMeasure.TEASPOON]
      })
    );
  }

  /**
   * remove ingredients
   */
  removeIngredients() {
    this.ingredients.removeAt(-1);
  }

  private createForm() {
    this.recipeForm = this.fb.group({
      description: [''],
      prepTime: [0],
      cookTime: [0],
      source: [0],
      servings: [0],
      url: [''],
      difficulty: [Difficulty.EASY.value],
      directions: [''],
      notes: [''],
      image: [''],
      ingredients: this.fb.array([
        this.fb.group({
          description: [''],
          amount: [0],
          uom: [UnitOfMeasure.TEASPOON]
        })
      ]),
      categories: this.fb.array([])
    });
  }
}
