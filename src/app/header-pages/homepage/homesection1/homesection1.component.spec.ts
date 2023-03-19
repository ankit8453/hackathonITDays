import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Homesection1Component } from './homesection1.component';

describe('Homesection1Component', () => {
  let component: Homesection1Component;
  let fixture: ComponentFixture<Homesection1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Homesection1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Homesection1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
