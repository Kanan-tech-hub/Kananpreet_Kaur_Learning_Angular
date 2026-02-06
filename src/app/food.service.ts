import { Injectable } from '@angular/core';
import { foodItem } from './models/foodItem';
import { FOOD_ITEMS } from './data/mock-content';
import { Observable, of } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class FoodService {
  private foods: foodItem[] = FOOD_ITEMS;

 
  getFoods(): Observable<foodItem[]> {
    return of(this.foods);
  }

  
  getFoodItem(id: number): Observable<foodItem | undefined> {
    return of(this.foods.find(f => f.id === id));
  }

  addFood(newItem: foodItem): Observable<foodItem[]> {
    this.foods.push(newItem);
    return of(this.foods);
  }

  
  updateFood(updatedItem: foodItem): Observable<foodItem[]> {
    const index = this.foods.findIndex(f => f.id === updatedItem.id);
    if (index !== -1) this.foods[index] = updatedItem;
    return of(this.foods);
  }

  
  deleteFood(id: number): Observable<foodItem | undefined> {
    const index = this.foods.findIndex(f => f.id === id);
    if (index !== -1) return of(this.foods.splice(index, 1)[0]);
    return of(undefined);
  }
}