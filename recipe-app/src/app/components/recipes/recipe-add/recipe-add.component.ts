import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormArray, Validators } from '@angular/forms';

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
  // initial string and int vlaue for form controls
  private readonly INITIAL_STR_VALUE = '';
  private readonly INITIAL_INT_VALUE = 0;

  recipeForm: FormGroup;
  categoryEnum = Category.categories;
  difficultyEnum = Difficulty.difficulties;
  unitOfMeasureEnum = UnitOfMeasure.unitOfMeasures;

  constructor(private fb: FormBuilder, private recipeService: RecipeService) {}

  ngOnInit() {
    this.createForm();
  }

  /**
   * createForm
   */
  private createForm() {
    const urlReg = '(https?://)?([\\da-z.-]+)\\.([a-z.]{2,6})[/\\w .-]*/?';
    this.recipeForm = this.fb.group({
      description: [this.INITIAL_STR_VALUE, Validators.required],
      prepTime: [this.INITIAL_INT_VALUE, [Validators.min(1), Validators.max(999)]],
      cookTime: [this.INITIAL_INT_VALUE, [Validators.min(1), Validators.max(999)]],
      source: [this.INITIAL_STR_VALUE],
      servings: [this.INITIAL_INT_VALUE, [Validators.min(1), Validators.max(100)]],
      url: [this.INITIAL_STR_VALUE, Validators.pattern(urlReg)],
      difficulty: [Difficulty.EASY.value],
      directions: [this.INITIAL_STR_VALUE, Validators.required],
      notes: [this.INITIAL_STR_VALUE],
      image: [],
      ingredients: this.fb.array([
        this.fb.group({
          description: [this.INITIAL_STR_VALUE],
          amount: [this.INITIAL_INT_VALUE, [Validators.min(1), Validators.max(999)]],
          uom: [UnitOfMeasure.TEASPOON]
        })
      ]),
      categories: this.fb.array([])
    });
  }

  /**
   * the submit button click
   */
  onSubmit() {
    console.log(this.recipeForm.value);
    this.recipeService.addRecipe(this.recipeForm.value);
  }

  get description() {
    return this.recipeForm.get('description');
  }

  get prepTime() {
    return this.recipeForm.get('prepTime');
  }

  get cookTime() {
    return this.recipeForm.get('cookTime');
  }

  get servings() {
    return this.recipeForm.get('servings');
  }

  get url() {
    return this.recipeForm.get('url');
  }

  get directions() {
    return this.recipeForm.get('directions');
  }

  get categories() {
    return this.recipeForm.get('categories') as FormArray;
  }

  /**
   * change categories
   * @param category the category of recipe
   * @param isChecked has this category been checked
   */
  onChange(category: string, isChecked: boolean) {
    if (isChecked) {
      this.categories.push(this.fb.control(category));
    } else {
      const index = this.categories.controls.findIndex(control => control.value === category);
      this.categories.removeAt(index);
    }
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
        description: [this.INITIAL_STR_VALUE],
        amount: [this.INITIAL_INT_VALUE],
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
}
