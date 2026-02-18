import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter, Routes } from '@angular/router';
import { AppComponent } from './app/app.component';
import { FoodListComponent } from './app/food-list/food-list.component';
import { PageNotFoundComponent } from './app/page-not-found/page-not-found';
import { ModifyListItemComponent } from './app/modify-list-item/modify-list-item';

const routes: Routes = [

  { path: 'home', component: FoodListComponent },
  
  
  { path: 'modify', component: ModifyListItemComponent }, 
  
  { path: '', redirectTo: '/home', pathMatch: 'full' }, 
  { path: '**', component: PageNotFoundComponent } 
];

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(routes) // Requirement #4 and #5
  ]
}).catch(err => console.error(err));