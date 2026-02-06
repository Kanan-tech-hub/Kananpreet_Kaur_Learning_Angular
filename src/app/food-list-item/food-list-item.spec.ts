import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FoodListItem } from './food-list-item';

describe('FoodListItem', () => {
  let component: FoodListItem;
  let fixture: ComponentFixture<FoodListItem>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FoodListItem]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FoodListItem);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
