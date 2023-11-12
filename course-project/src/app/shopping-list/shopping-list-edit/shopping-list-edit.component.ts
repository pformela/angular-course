import {
  Component,
  ElementRef,
  EventEmitter,
  Output,
  ViewChild,
} from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';

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

  @Output() public ingredientAdded: EventEmitter<Ingredient> =
    new EventEmitter<Ingredient>();

  public onAddItem(): void {
    const ingredientName: string = this.nameInputRef.nativeElement.value;
    const ingredientAmount: number = this.amountInputRef.nativeElement.value;
    const newIngredient = new Ingredient(ingredientName, ingredientAmount);

    this.ingredientAdded.emit(newIngredient);
  }
}
