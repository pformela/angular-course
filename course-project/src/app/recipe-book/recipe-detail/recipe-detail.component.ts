import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css'],
})
export class RecipeDetailComponent implements OnInit {
  public recipe: Recipe | undefined = new Recipe('', '', '');
  public recipeId: string = '';

  public constructor(
    private recipeService: RecipeService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  public ngOnInit(): void {
    this.recipeId = this.route.snapshot.params['id'];
    this.recipe = this.recipeService.getRecipeById(this.recipeId);

    if (!this.recipe)
      this.router.navigate(['not-found'], { relativeTo: this.route });

    this.route.params.subscribe((params: Params) => {
      this.recipeId = params['id'];

      this.recipe = this.recipeService.getRecipeById(this.recipeId);

      if (!this.recipe)
        this.router.navigate(['not-found'], { relativeTo: this.route });
    });
  }

  public onAddToShoppingList(): void {
    if (this.recipe)
      this.recipeService.addIngredientsToShoppingList(this.recipe.ingredients);
  }
}
