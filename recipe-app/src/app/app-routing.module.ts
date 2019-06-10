import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RecipesComponent } from './components/recipes/recipes.component';
import { RecipeAddComponent } from './components/recipes/recipe-add/recipe-add.component';

const routes: Routes = [
  { path: 'recipes', component: RecipesComponent },
  { path: 'recipes/new', component: RecipeAddComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
