import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FoodListItemComponent } from '../food-list-item/food-list-item.component';

@Component({
  selector: 'app-food-list',
  standalone: true,
  imports: [CommonModule, FoodListItemComponent],
  templateUrl: './food-list.component.html',
  styleUrls: ['./food-list.component.css']
})
export class FoodListComponent {}
