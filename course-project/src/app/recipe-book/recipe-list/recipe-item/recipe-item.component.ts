import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Recipe } from '../../recipe.model';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css'],
})
export class RecipeItemComponent {
  @Input('recipe') public recipe: Recipe = new Recipe('', '', '');
  @Output() public recipeSelected: EventEmitter<void> =
    new EventEmitter<void>();

  public onSelected(): void {
    this.recipeSelected.emit();
  }
}
