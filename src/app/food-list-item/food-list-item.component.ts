import { Component, Input } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common'; 
import { foodItem } from '../models/foodItem';

@Component({
  selector: 'app-food-list-item',
  standalone: true,
  imports: [
    CommonModule, 
    NgOptimizedImage 
  ],
  templateUrl: './food-list-item.component.html',
  styleUrls: ['./food-list-item.component.css']
})
export class FoodListItemComponent {
  @Input() item?: foodItem;
}