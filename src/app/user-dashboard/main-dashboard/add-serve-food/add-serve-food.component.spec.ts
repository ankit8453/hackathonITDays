import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddServeFoodComponent } from './add-serve-food.component';

describe('AddServeFoodComponent', () => {
  let component: AddServeFoodComponent;
  let fixture: ComponentFixture<AddServeFoodComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddServeFoodComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddServeFoodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
