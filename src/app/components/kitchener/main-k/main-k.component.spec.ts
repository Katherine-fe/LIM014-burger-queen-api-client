import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainKComponent } from './main-k.component';

describe('MainKComponent', () => {
  let component: MainKComponent;
  let fixture: ComponentFixture<MainKComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainKComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MainKComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
