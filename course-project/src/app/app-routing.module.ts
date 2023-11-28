import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { RecipeListComponent } from './recipe-book/recipe-list/recipe-list.component';
import { RecipeDetailComponent } from './recipe-book/recipe-detail/recipe-detail.component';
import { ShoppingListEditComponent } from './shopping-list/shopping-list-edit/shopping-list-edit.component';

const routes: Routes = [
  { path: '', redirectTo: 'recipes', pathMatch: 'full' },
  {
    path: 'recipes',
    children: [
      { path: '', component: RecipeListComponent },
      { path: ':id', component: RecipeDetailComponent },
      {
        path: ':id/not-found',
        component: PageNotFoundComponent,
        data: { message: 'Recipe not found!' },
      },
    ],
  },
  {
    path: 'shopping-list',
    children: [
      { path: '', component: ShoppingListComponent },
      { path: 'add', component: ShoppingListEditComponent },
    ],
  },
  {
    path: 'not-found',
    component: PageNotFoundComponent,
    data: { message: 'Page not found!' },
  },
  { path: '**', redirectTo: 'not-found' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
