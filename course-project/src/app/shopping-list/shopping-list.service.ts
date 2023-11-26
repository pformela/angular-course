import { EventEmitter, Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';

@Injectable({ providedIn: 'root' })
export class ShoppingListService {
  public ingredients: Ingredient[] = [
    new Ingredient('Apples', 5),
    new Ingredient('Tomatoes', 10),
  ];
  public ingredientsChanged: EventEmitter<void> = new EventEmitter();

  public getIngredients(): Ingredient[] {
    return this.ingredients.slice();
  }

  public addIngredient(...ingredient: Ingredient[]): void {
    this.ingredients.push(...ingredient);
    this.ingredientsChanged.emit();
  }
}
