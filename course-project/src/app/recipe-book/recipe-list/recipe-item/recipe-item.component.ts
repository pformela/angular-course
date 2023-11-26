import { Component, Input } from '@angular/core';
import { Recipe } from '../../recipe.model';
import { RecipeService } from '../../recipe.service';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css'],
})
export class RecipeItemComponent {
  @Input() public recipe: Recipe = new Recipe('', '', '');

  public constructor(private recipeService: RecipeService) {}

  public onRecipeSelected(): void {
    this.recipeService.setSelectedRecipe(this.recipe);
  }
}
