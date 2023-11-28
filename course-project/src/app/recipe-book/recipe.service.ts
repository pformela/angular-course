import { EventEmitter, Injectable } from '@angular/core';
import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable({ providedIn: 'root' })
export class RecipeService {
  public recipes: Recipe[] = [
    new Recipe(
      'Tasty Schnitzel',
      'A super tasty Schnitzel - just awesome!',
      'https://www.southernliving.com/thmb/HSEUOjJVCl4kIRJRMAZ1eblQlWE=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Millionaire_Spaghetti_019-34e9c04b1ae8405088f53450a048e413.jpg',
      [
        { name: 'Meat', amount: 1 },
        { name: 'French Fries', amount: 20 },
      ]
    ),
    new Recipe(
      'Big fat burger',
      'What else you need to say?',
      'https://www.southernliving.com/thmb/HSEUOjJVCl4kIRJRMAZ1eblQlWE=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Millionaire_Spaghetti_019-34e9c04b1ae8405088f53450a048e413.jpg',
      [
        { name: 'Buns', amount: 2 },
        { name: 'Meat', amount: 1 },
      ]
    ),
  ];
  public selectedRecipe: Recipe = new Recipe('', '', '');
  public selectedRecipeChanged: EventEmitter<Recipe> = new EventEmitter();

  public constructor(private shoppingListService: ShoppingListService) {}

  public getRecipes(): Recipe[] {
    return this.recipes.slice();
  }

  public addIngredientsToShoppingList(ingredients: Ingredient[]): void {
    this.shoppingListService.addIngredient(...ingredients);
  }

  public setSelectedRecipe(recipe: Recipe): void {
    this.selectedRecipe = recipe;
    this.selectedRecipeChanged.emit(recipe);
  }

  public getRecipeById(id: string): Recipe | undefined {
    return this.recipes.find((recipe: Recipe) => recipe.id === id) || undefined;
  }
}
