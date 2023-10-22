import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductElementDetailsComponent } from './product-element-details.component';

describe('ProductElementDetailsComponent', () => {
  let component: ProductElementDetailsComponent;
  let fixture: ComponentFixture<ProductElementDetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProductElementDetailsComponent]
    });
    fixture = TestBed.createComponent(ProductElementDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
