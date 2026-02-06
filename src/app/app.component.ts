import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common'; 
import { FoodService } from './food.service';
import { foodItem } from './models/foodItem';
// Import your components so they can be used in the template
import { FoodListComponent } from './food-list/food-list.component';
import { FoodListItemComponent } from './food-list-item/food-list-item.component';

@Component({
  selector: 'app-root',
  standalone: true,
  // ADD FoodListComponent and FoodListItemComponent HERE
  imports: [CommonModule, FoodListComponent, FoodListItemComponent], 
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  featuredFood?: foodItem;

  constructor(private foodService: FoodService) {} 

  ngOnInit(): void {
    // Step 12: Retrieve item with ID 1 from the service [cite: 32, 39]
    this.foodService.getFoodItem(1).subscribe(item => {
      this.featuredFood = item;
    });
  }
}