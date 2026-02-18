import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FoodService } from '../food.service';

@Component({
  selector: 'app-modify-list-item',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule
  ],
  templateUrl: './modify-list-item.html',
  styleUrls: ['./modify-list-item.css']
})
export class ModifyListItemComponent {

  foodForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private foodService: FoodService
  ) {
    this.foodForm = this.fb.group({
      id: ['', [Validators.required, Validators.pattern("^[0-9]+$")]],
      name: ['', [Validators.required]],
      price: ['', [Validators.required, Validators.min(1)]],
      cookingTime: ['', [Validators.required, Validators.min(1)]],
      category: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.foodForm.valid) {
      this.foodService.addFood(this.foodForm.value).subscribe();
      this.foodForm.reset();
    }
  }
}
