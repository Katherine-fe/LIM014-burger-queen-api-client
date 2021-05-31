import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalDeleteProductsComponent } from './modal-delete-products.component';

describe('ModalDeleteProductsComponent', () => {
  let component: ModalDeleteProductsComponent;
  let fixture: ComponentFixture<ModalDeleteProductsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalDeleteProductsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalDeleteProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
