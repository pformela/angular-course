import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from './shopping-list.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css'],
})
export class ShoppingListComponent implements OnInit {
  public ingredients: Ingredient[] = [];

  public constructor(
    private shoppingListService: ShoppingListService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  public ngOnInit(): void {
    this.ingredients = this.shoppingListService.getIngredients();
    this.shoppingListService.ingredientsChanged.subscribe(() => {
      this.ingredients = this.shoppingListService.getIngredients();
    });
  }

  public onIngredientAdded(ingredient: Ingredient): void {
    this.shoppingListService.addIngredient(ingredient);
  }

  public onNavigateToAddIngredient(): void {
    this.router.navigate(['add'], { relativeTo: this.route });
  }
}
