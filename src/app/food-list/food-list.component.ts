import { Component, OnInit } from '@angular/core'; // Added OnInit
import { CommonModule } from '@angular/common';
import { FoodListItemComponent } from '../food-list-item/food-list-item.component';
import { foodItem } from '../models/foodItem'; 
import { FoodService } from '../food.service'; // You will create this in the next step

@Component({
  selector: 'app-food-list',
  standalone: true,
  imports: [CommonModule, FoodListItemComponent],
  templateUrl: './food-list.component.html',
  styleUrls: ['./food-list.component.css']
})
export class FoodListComponent implements OnInit {
  foodArray: foodItem[] = []; // Start with an empty array

  // Step 7: Inject the service [cite: 73]
  constructor(private foodService: FoodService) {}

  ngOnInit(): void {
    // Step 8: Use the service to retrieve your array [cite: 75]
    this.foodService.getFoods().subscribe(data => {
      this.foodArray = data;
    });
  }
}