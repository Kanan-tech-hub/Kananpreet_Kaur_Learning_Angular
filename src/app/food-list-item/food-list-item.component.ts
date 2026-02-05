import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-food-list-item',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './food-list-item.component.html',
  styleUrls: ['./food-list-item.component.css']
})
export class FoodListItemComponent {
  @Input() food!: {
    name: string;
    description: string;
    calories: number | string;
    image?: string;
  };
}
