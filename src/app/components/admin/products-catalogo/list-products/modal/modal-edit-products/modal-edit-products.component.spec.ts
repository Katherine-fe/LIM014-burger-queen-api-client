import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalEditProductsComponent } from './modal-edit-products.component';

describe('ModalEditProductsComponent', () => {
  let component: ModalEditProductsComponent;
  let fixture: ComponentFixture<ModalEditProductsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalEditProductsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalEditProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
