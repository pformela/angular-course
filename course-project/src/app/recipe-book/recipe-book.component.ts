import { Component, OnInit } from '@angular/core';
import { Recipe } from './recipe.model';
import { RecipeService } from './recipe.service';

@Component({
  selector: 'app-recipe-book',
  templateUrl: './recipe-book.component.html',
  styleUrls: ['./recipe-book.component.css'],
})
export class RecipeBookComponent implements OnInit {
  public selectedRecipe: Recipe = new Recipe('', '', '');

  public constructor(private recipeService: RecipeService) {}

  public ngOnInit(): void {
    this.recipeService.selectedRecipeChanged.subscribe((recipe: Recipe) => {
      this.selectedRecipe = recipe;
    });
  }
}
