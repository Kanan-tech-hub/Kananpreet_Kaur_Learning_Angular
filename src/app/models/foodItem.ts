export interface foodItem {
  id: number;
  name: string;
  ingredients: string[];
  cookingTime: number; // in minutes
  price: number;
  category: string;
  notes?: string;
}
