
import { foodItem } from '../models/foodItem'; 

export const FOOD_ITEMS: foodItem[] = [
  { id: 0, name: 'Pizza', ingredients: ['Dough'], cookingTime: 15, price: 12, category: 'Italian',imageUrl: 'https://sl.bing.net/hXZ4VUaoFyK' },
  { id: 1, name: 'Tacos', ingredients: ['Beef'], cookingTime: 10, price: 9, category: 'Mexican',imageUrl: 'https://sl.bing.net/dK7Tw1xwVHM' },
  { id: 2, name: 'Sushi', ingredients: ['Fish'], cookingTime: 20, price: 15, category: 'Japanese',imageUrl: 'https://sl.bing.net/gImBrqbrCYS' },
  { id: 3, name: 'Burger', ingredients: ['Patty'], cookingTime: 12, price: 11, category: 'American',imageUrl: 'https://sl.bing.net/jZkoRY1FaUe' }
];