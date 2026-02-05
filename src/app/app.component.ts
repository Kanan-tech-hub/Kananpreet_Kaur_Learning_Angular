import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FoodListComponent } from './food-list/food-list.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, FoodListComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class App {}
