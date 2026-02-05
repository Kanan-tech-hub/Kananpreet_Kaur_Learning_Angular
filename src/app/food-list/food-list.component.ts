import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FoodListItemComponent } from '../food-list-item/food-list-item.component';
import { foodItem } from '../foodItem'; // Import your interface

@Component({
  selector: 'app-food-list',
  standalone: true,
  imports: [CommonModule, FoodListItemComponent],
  templateUrl: './food-list.component.html',
  styleUrls: ['./food-list.component.css']
})
export class FoodListComponent {
  foodArray: foodItem[] = [
    { id: 0, name: 'Pizza', ingredients: ['Dough', 'Tomato'], cookingTime: 15, price: 12, category: 'Italian' },
    { id: 1, name: 'Tacos', ingredients: ['Tortilla', 'Beef'], cookingTime: 10, price: 9, category: 'Mexican' },
    { id: 2, name: 'Sushi', ingredients: ['Rice', 'Fish'], cookingTime: 20, price: 15, category: 'Japanese' },
    { id: 3, name: 'Burger', ingredients: ['Bun', 'Patty'], cookingTime: 12, price: 11, category: 'American' }
  ];
}