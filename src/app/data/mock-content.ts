
import { foodItem } from '../models/foodItem'; 

export const FOOD_ITEMS: foodItem[] = [
  { id: 0, name: 'Pizza', ingredients: ['Dough'], cookingTime: 15, price: 12, category: 'Italian',imageUrl: 'https://cdn.pixabay.com/photo/2023/07/24/17/09/mexican-8147497_1280.png' },
  { id: 1, name: 'Tacos', ingredients: ['Beef'], cookingTime: 10, price: 9, category: 'Mexican',imageUrl: 'https://insanelygoodrecipes.com/wp-content/uploads/2022/10/Homemade-Vegan-Mexican-Beef-Tacos-with-Herbs.jpg' },
  { id: 2, name: 'Sushi', ingredients: ['Fish'], cookingTime: 20, price: 15, category: 'Japanese',imageUrl: 'https://www.ravennaedintorni.it/wp-content/uploads/2017/03/sushi-2.jpg' },
  { id: 3, name: 'Burger', ingredients: ['Patty'], cookingTime: 12, price: 11, category: 'American',imageUrl: 'https://theflattopking.com/wp-content/uploads/2023/01/blackstone-smash-burgers.jpg' }
];