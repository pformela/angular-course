import { Component, ElementRef, ViewChild } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { ShoppingListService } from '../shopping-list.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-shopping-list-edit',
  templateUrl: './shopping-list-edit.component.html',
  styleUrls: ['./shopping-list-edit.component.css'],
})
export class ShoppingListEditComponent {
  @ViewChild('nameInput', { static: false }) public nameInputRef: ElementRef =
    new ElementRef('');
  @ViewChild('amountInput', { static: false })
  public amountInputRef: ElementRef = new ElementRef('');

  public constructor(
    private shoppingListService: ShoppingListService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  public onAddItem(): void {
    const ingredientName: string = this.nameInputRef.nativeElement.value;
    const ingredientAmount: number = this.amountInputRef.nativeElement.value;
    const newIngredient: Ingredient = new Ingredient(
      ingredientName,
      ingredientAmount
    );

    this.shoppingListService.addIngredient(newIngredient);

    this.router.navigate(['../'], { relativeTo: this.route });
  }
}
