import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./food-list/food-list.component')
        .then(m => m.FoodListComponent)
  },
  {
    path: 'modify',
    loadComponent: () =>
      import('./modify-list-item/modify-list-item.component')
        .then(m => m.ModifyListItemComponent)
  },
  {
    path: '**',
    loadComponent: () =>
      import('./page-not-found/page-not-found.component')
        .then(m => m.PageNotFoundComponent)
  }
];
