import { Component, OnInit } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { FoodListItemComponent } from '../food-list-item/food-list-item.component';
import { foodItem } from '../models/foodItem'; // Path to your interface 
import { FoodService } from '../food.service'; // Path to the service you created 

@Component({
  selector: 'app-food-list',
  standalone: true,
  imports: [CommonModule, FoodListItemComponent, NgOptimizedImage],
  templateUrl: './food-list.component.html',
  styleUrls: ['./food-list.component.css']
})
export class FoodListComponent implements OnInit {
  foodArray: foodItem[] = []; 

  
  constructor(private foodService: FoodService) {} 

  ngOnInit(): void {

    this.foodService.getFoods().subscribe((data) => {
      this.foodArray = data;
    });
  }
}