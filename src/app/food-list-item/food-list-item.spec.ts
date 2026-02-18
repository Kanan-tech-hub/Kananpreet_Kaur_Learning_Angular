import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FoodListItemComponent } from '../food-list-item/food-list-item.component';

describe('FoodListItemComponent', () => {
  let component: FoodListItemComponent;
  let fixture: ComponentFixture<FoodListItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FoodListItemComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FoodListItemComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
