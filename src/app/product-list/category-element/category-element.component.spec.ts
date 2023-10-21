import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoryElementComponent } from './category-element.component';

describe('CategoryElementComponent', () => {
  let component: CategoryElementComponent;
  let fixture: ComponentFixture<CategoryElementComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CategoryElementComponent]
    });
    fixture = TestBed.createComponent(CategoryElementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
