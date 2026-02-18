import { Routes } from '@angular/router';
import { FoodListComponent } from './food-list/food-list.component';
// Note the single dot and exact folder names
import { ModifyListItemComponent } from './modify-list-item/modify-list-item';
import { PageNotFoundComponent } from './page-not-found/page-not-found';

export const routes: Routes = [
  { path: 'home', component: FoodListComponent },
  { path: 'modify', component: ModifyListItemComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' }, // Requirement 7
  { path: '**', component: PageNotFoundComponent }    // Requirement 9
];