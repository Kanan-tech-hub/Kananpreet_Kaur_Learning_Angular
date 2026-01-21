import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { foodItem } from './models/foodItem';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class App {
  studentName: string = "Kananpreet Kaur";
  courseName: string = "MAD 307 - JavaScript Frameworks";
foodItems: foodItem[] = [
  {
    id: 1,
    name: 'Butter Chicken',
    ingredients: ['Chicken', 'Butter', 'Tomato', 'Cream', 'Spices'],
    cookingTime: 45,
    price: 14.99,
    category: 'Indian',
    notes: 'Best served with naan'
  },
  {
    id: 2,
    name: 'Veggie Pizza',
    ingredients: ['Dough', 'Cheese', 'Bell Peppers', 'Onions', 'Tomato Sauce'],
    cookingTime: 30,
    price: 12.50,
    category: 'Italian'
  },
  {
    id: 3,
    name: 'Pasta Alfredo',
    ingredients: ['Pasta', 'Cream', 'Garlic', 'Cheese'],
    cookingTime: 25,
    price: 11.00,
    category: 'Italian'
  },
  {
    id: 4,
    name: 'Chicken Biryani',
    ingredients: ['Rice', 'Chicken', 'Spices', 'Yogurt'],
    cookingTime: 60,
    price: 15.00,
    category: 'Indian'
  },
  {
    id: 5,
    name: 'Caesar Salad',
    ingredients: ['Lettuce', 'Croutons', 'Cheese', 'Dressing'],
    cookingTime: 10,
    price: 8.99,
    category: 'Salad'
  },
  {
    id: 6,
    name: 'Pancakes',
    ingredients: ['Flour', 'Milk', 'Eggs', 'Sugar'],
    cookingTime: 15,
    price: 6.50,
    category: 'Breakfast'
  }
];
}

