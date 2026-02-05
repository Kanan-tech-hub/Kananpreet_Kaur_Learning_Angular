import { Component, Input } from '@angular/core';
import { foodItem } from '../foodItem';

@Component({
  selector: 'app-food-list-item',
  standalone: true,
  templateUrl: './food-list-item.component.html',
  styleUrls: ['./food-list-item.component.css']
})
export class FoodListItemComponent {
  @Input() item?: foodItem; // This accepts the data from the parent
}