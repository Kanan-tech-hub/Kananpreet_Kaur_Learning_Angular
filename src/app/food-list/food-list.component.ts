import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FoodListItemComponent } from '../food-list-item/food-list-item.component';
import { foodItem } from '../models/foodItem';
import { FoodService } from '../food.service';

@Component({
  selector: 'app-food-list',
  standalone: true,
  imports: [CommonModule, FoodListItemComponent],
  templateUrl: './food-list.component.html',
  styleUrls: ['./food-list.component.css']
})
export class FoodListComponent implements OnInit {

  foodArray: foodItem[] = [];

  constructor(private foodService: FoodService) {}

  ngOnInit(): void {
    this.loadFoods();
  }

  loadFoods() {
    this.foodService.getFoods().subscribe((data) => {
      this.foodArray = data;
    });
  }

  deleteFood(id: number) {
    this.foodService.deleteFood(id).subscribe(() => {
      this.loadFoods();
    });
  }

}
