import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css'],
})
export class RecipeListComponent implements OnInit {
  public recipes: Recipe[] = [];

  public constructor(private recipeService: RecipeService) {}

  public ngOnInit(): void {
    this.recipes = this.recipeService.getRecipes();
  }

  public onRecipeSelected(recipe: Recipe): void {
    this.recipeService.setSelectedRecipe(recipe);
  }
}
