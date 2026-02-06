import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FoodListItemComponent } from '../food-list-item/food-list-item.component';
import { foodItem } from '../models/foodItem'; // Path to your interface 
import { FoodService } from '../food.service'; // Path to the service you created 

@Component({
  selector: 'app-food-list',
  standalone: true,
  imports: [CommonModule, FoodListItemComponent],
  templateUrl: './food-list.component.html',
  styleUrls: ['./food-list.component.css']
})
export class FoodListComponent implements OnInit {
  foodArray: foodItem[] = []; // Step 14: This will hold your array [cite: 14]

  // Step 7: Inject the service using Dependency Injection [cite: 27]
  constructor(private foodService: FoodService) {} 

  ngOnInit(): void {
    // Step 8: Use the service to retrieve your array via Observable [cite: 26, 29]
    this.foodService.getFoods().subscribe((data) => {
      this.foodArray = data;
    });
  }
}