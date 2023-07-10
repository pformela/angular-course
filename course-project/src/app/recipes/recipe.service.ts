import { EventEmitter, Injectable } from '@angular/core';
import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list.service';

@Injectable()
export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe(
      'Tasty Schnitzel',
      'A super tasty Schnitzel - just awesome!',
      'https://thebigmansworld.com/wp-content/uploads/2022/11/chicken-schnitzel-recipe.jpg',
      [new Ingredient('Meat', 1), new Ingredient('French Fries', 20)]
    ),
    new Recipe(
      'Big Fat Burger',
      'What else you need to say?',
      'https://img.pixers.pics/pho_wat(s3:700/FO/68/98/98/63/700_FO68989863_660839ba07dcc2bce80d23f0529f5ecb.jpg,700,516,cms:2018/10/5bd1b6b8d04b8_220x50-watermark.png,over,480,466,jpg)/naklejki-big-burger-samodzielnie-na-bialym-tle.jpg.jpg',
      [
        new Ingredient('Buns', 2),
        new Ingredient('Meat', 1),
        new Ingredient('Cheese', 1),
      ]
    ),
  ];

  constructor(private slService: ShoppingListService) {}

  getRecipes() {
    return this.recipes.slice(); // return a copy of the array
  }

  onAddToShoppingList(ingredients: Ingredient[]) {
    this.slService.addMultipleIngredients(ingredients);
  }
}
